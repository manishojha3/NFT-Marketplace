import Link from 'next/link';
import React from 'react';
import { SiEthereum } from 'react-icons/si';

const truncate = (str) => {
  return str.length > 15 ? str.substring(0, 60) + "..." : str;
};

const SingleCard = ({ nfts }) => {
  return (
    <Link href={`/nft/${nfts.tokenId - 1}?price=${nfts.price}`}>
      <div className="sm:w-[320px] w-full rounded-[20px] bg-gradient-to-r from-[#1a202c] via-[#2d3748] to-[#4a5568] cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <img src={nfts.fileURI} alt="fund" className="w-full h-[250px] object-cover rounded-t-[20px]" />

        <div className="flex flex-col p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-[#e2e8f0]">{nfts.category}</p>
            {/* Optional icon for more content */}
          </div>

          <div className="block">
            <h3 className="font-bold text-xl text-white truncate">{nfts.title}</h3>
            <p title={nfts.description} className="mt-2 text-sm text-[#cbd5e0] line-clamp-2">{nfts.description}</p>
          </div>

          <div className="flex flex-row items-center mt-4">
            <SiEthereum fontSize={20} color="#A0AEC0" />
            <h3 className="ml-2 font-semibold text-lg text-[#EDF2F7]">{nfts.price}</h3>
          </div>

          <div className="flex justify-center items-center mt-5">
            <button className="py-2 px-4 text-white font-semibold bg-[#38b2ac] hover:bg-[#319795] rounded-lg transition duration-300 ease-in-out">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
