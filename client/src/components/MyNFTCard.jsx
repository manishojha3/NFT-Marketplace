import React from 'react';
import { SiEthereum } from 'react-icons/si';

const MyNFTCard = ({ nfts, handleClick }) => {
  return (
    <div 
      onClick={handleClick} 
      className="cursor-pointer p-6 space-y-4 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <img 
        className="rounded-lg w-full h-[200px] object-cover border-4 border-white dark:border-gray-600 transition-transform transform hover:scale-110" 
        src={nfts.fileURI} 
        alt={nfts.title} 
      />

      <div className="flex justify-between items-center">
        <h1 className="text-white text-lg font-semibold truncate">{nfts.title}</h1>
        <div className="flex items-center space-x-2">
          <div className="bg-white dark:bg-gray-600 rounded-full p-2 shadow-inner">
            <SiEthereum className="text-purple-700 dark:text-pink-400 text-[20px]" />
          </div>
          <h3 className="text-white font-medium">{nfts.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default MyNFTCard;
