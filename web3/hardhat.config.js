require("@nomicfoundation/hardhat-toolbox");

;
/** @type import('hardhat/config').HardhatUserConfig */



module.exports = {
  solidity: "0.8.2",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/3ZXEC9UvwrrM3bqvrXXRL86RoPel0HhQ",
      accounts: ["1339299806a1a743a19d20ec2ce454841ba74ea842ee5a9c874333d87e7a4eaf"],
    },
  },
};