import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import CustomButton from './CustomButton';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '@/constants';
import CustomInput from './CustomInput';
import Loader from './Loader';

const truncate = (str) => {
    try {
        return str.length > 15 ? str.substring(0, 15) + "..." : str;
    } catch (error) {}
};

const ToggleChange = ({ NFTData, currentIndex, currentAccount, close }) => {
    const [formData, setFormData] = useState({ newprice: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const changePrice = async (id) => {
        setIsLoading(true);
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const Contract = new ethers.Contract(contractAddress, contractABI, signer);
            const { newprice } = formData;
            const parsedPrice = ethers.utils.parseEther(newprice);
            const transactionHash = await Contract.changePrice(id, parsedPrice);
            await transactionHash.wait();
            setIsLoading(false);
            window.location.reload();
        } catch (error) {
            alert("Fill the form correctly!");
            window.location = '/profile';
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative w-11/12 max-w-4xl bg-white rounded-lg shadow-lg dark:bg-gray-800 overflow-hidden">
                <AiOutlineClose
                    fontSize={28}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 cursor-pointer"
                    onClick={close}
                />

                {!currentAccount && (
                    <div className="p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Connect your wallet to see this NFT.
                        </h2>
                    </div>
                )}

                {currentAccount && (
                    <section className="p-6">
                        {isLoading && <Loader />}
                        <div className="flex flex-col md:flex-row md:space-x-6">
                            <img
                                alt="NFT Preview"
                                className="w-full md:w-1/2 object-cover rounded-lg"
                                src={NFTData.fileURI}
                            />
                            <div className="mt-4 md:mt-0 md:w-1/2">
                                <h2 className="text-sm text-gray-500 dark:text-gray-400">
                                    {NFTData.category}
                                </h2>
                                <div className="flex items-center justify-between mt-2">
                                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                        {NFTData.title}
                                    </h1>
                                    <div
                                        className={`px-3 py-1 text-sm font-semibold rounded-lg ${NFTData.isOnSale ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                                    >
                                        {NFTData.isOnSale ? 'On Sale' : 'Not On Sale'}
                                    </div>
                                </div>
                                <p
                                    title={NFTData.nftOwner}
                                    className="mt-4 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    Owner: {truncate(NFTData.nftOwner)}
                                </p>
                                <p className="mt-4 text-gray-800 dark:text-gray-200">
                                    {NFTData.description}
                                </p>
                                <p className="mt-4 text-gray-500 dark:text-gray-400">
                                    {NFTData.timestamp}
                                </p>
                                <div className="flex items-center mt-6">
                                    <SiEthereum fontSize={24} className="text-gray-800 dark:text-gray-100" />
                                    <span className="ml-2 text-2xl font-medium text-gray-800 dark:text-gray-100">
                                        {NFTData.price}
                                    </span>
                                </div>
                                <div className="mt-6 flex flex-col md:flex-row md:items-center md:space-x-4">
                                    <CustomInput
                                        noLabel
                                        text="Set your new Price"
                                        type="number"
                                        name="newprice"
                                        handleChange={handleChange}
                                    />
                                    {currentAccount.toLowerCase() === NFTData.nftOwner.toLowerCase() ? (
                                        <CustomButton
                                            text="List for Sale"
                                            handleClick={() => changePrice(parseInt(NFTData.tokenId) - 1)}
                                            styles="mt-4 md:mt-0 bg-blue-500 text-white hover:bg-blue-400"
                                        />
                                    ) : (
                                        <CustomButton
                                            text="Login with Your Account"
                                            handleClick={() => {}}
                                            styles="mt-4 md:mt-0 bg-gray-500 text-white hover:bg-gray-400"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ToggleChange;
