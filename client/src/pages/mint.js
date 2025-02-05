import React, { useState } from 'react';
import { ethers } from 'ethers'; // Correct import for ethers
import Head from 'next/head';
import { contractAddress, contractABI, BEARER } from '@/constants';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import axios from 'axios';
import Loader from '@/components/Loader';

const MintNFT = () => {
  const [formData, setFormData] = useState({ title: '', category: '', description: '', price: '', fileURI: '' });
  const [imgBase64, setImgBase64] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) newErrors.price = "Valid price required";
    if (!fileUrl) newErrors.file = "NFT image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateId = async (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  };

  const pinFileToIPFS = async () => {
    const formData = new FormData();
    formData.append('file', fileUrl);

    const uniqueId = await generateId(10);
    formData.append('pinataMetadata', JSON.stringify({ name: uniqueId }));
    formData.append('pinataOptions', JSON.stringify({ cidVersion: 0 }));

    try {
      const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: BEARER,
        },
      });
      return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install it.");
        setIsLoading(false);
        return;
      }

      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length === 0) {
        alert("Please connect your MetaMask wallet.");
        setIsLoading(false);
        return;
      }

      const uploadedUrl = await pinFileToIPFS();
      if (!uploadedUrl) {
        setErrors((prev) => ({ ...prev, file: "Failed to upload image" }));
        setIsLoading(false);
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);  // Correct initialization
      const signer = provider.getSigner();
      const Contract = new ethers.Contract(contractAddress, contractABI, signer);

      const parsedAmount = ethers.utils.parseEther(formData.price); 

      const gasEstimate = await Contract.estimateGas.mintNFT(
        formData.title, formData.category, formData.description, uploadedUrl, parsedAmount
      );
      console.log("Gas Estimate:", gasEstimate.toString());

      const transaction = await Contract.mintNFT(
        formData.title, 
        formData.category, 
        formData.description, 
        uploadedUrl, 
        parsedAmount,
        {
          gasLimit: gasEstimate.mul(110).div(100), 
          maxPriorityFeePerGas: ethers.utils.parseUnits('2', 'gwei'),
          maxFeePerGas: ethers.utils.parseUnits('50', 'gwei'),
        }
      );
      console.log("Transaction sent:", transaction);
      await transaction.wait();
      console.log("Transaction confirmed.");

      window.location.href = '/shop';
    } catch (error) {
      console.error("Error during minting:", error);
      setIsLoading(false);
      alert("Error occurred during minting. Please try again.");
    }
  };

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgBase64(reader.result);
        setFileUrl(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Head>
        <title>NFT Marketplace - Mint Your NFT</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
        {isLoading && <Loader />}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Mint Your NFT</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <CustomInput
              name="title"
              text="NFT Title"
              type="text"
              value={formData.title}
              handleChange={(e) => handleChange(e, 'title')}
              error={errors.title}
            />
            <CustomInput
              name="category"
              text="NFT Category"
              type="text"
              value={formData.category}
              handleChange={(e) => handleChange(e, 'category')}
              error={errors.category}
            />
            <CustomInput
              name="description"
              text="NFT Description"
              type="text"
              value={formData.description}
              handleChange={(e) => handleChange(e, 'description')}
              isTextarea
              error={errors.description}
            />
            <CustomInput
              name="price"
              text="NFT Price (ETH)"
              type="number"
              value={formData.price}
              handleChange={(e) => handleChange(e, 'price')}
              error={errors.price}
            />
            <div className="flex flex-col items-center">
              <img
                src={imgBase64 || 'https://via.placeholder.com/150'}
                alt="NFT Preview"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <input
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
                onChange={changeImage}
                required
              />
              {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
            </div>

            <CustomButton handleClick={handleSubmit} text="Mint NFT" />
          </form>
        </div>
      </div>
    </>
  );
};

export default MintNFT;
