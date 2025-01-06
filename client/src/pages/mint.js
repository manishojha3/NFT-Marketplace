import React, { useState } from 'react';
import { ethers } from 'ethers';
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

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const generateId = async (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  };

  const pinFileToIPFS = async () => {
    const formData = new FormData();
    formData.append('file', fileUrl);

    const uniqueId = await generateId(10);

    const metadata = JSON.stringify({ name: uniqueId });
    formData.append('pinataMetadata', metadata);

    const options = JSON.stringify({ cidVersion: 0 });
    formData.append('pinataOptions', options);

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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const uploadedUrl = await pinFileToIPFS();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const Contract = new ethers.Contract(contractAddress, contractABI, signer);
      const parsedAmount = ethers.utils.parseEther(formData.price);
      const transaction = await Contract.mintNFT(formData.title, formData.category, formData.description, uploadedUrl, parsedAmount, {
        value: parsedAmount,
      });

      await transaction.wait();
      setIsLoading(false);
      window.location.href = '/shop';
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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
            <CustomInput name="title" text="NFT Title" type="text" handleChange={handleChange} />
            <CustomInput name="category" text="NFT Category" type="text" handleChange={handleChange} />
            <CustomInput name="description" text="NFT Description" type="text" handleChange={handleChange} isTextarea />
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
            </div>
            <CustomInput name="price" text="NFT Price (ETH)" type="number" handleChange={handleChange} />
            <CustomButton handleClick={() => {}} text="Mint NFT" />
          </form>
        </div>
      </div>
    </>
  );
};

export default MintNFT;
