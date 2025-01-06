const hre = require("hardhat");

async function main() {
  // Contract constructor arguments
  const companyName = "NFT Marketplace";
  const symbol = "MKT";
  const royaltyFee = 10;

  console.log("Deploying contract...");

  // Deploy the NFTMarketplace contract
  const nftMarketplace = await hre.ethers.deployContract("NFTMarketplace", [
    companyName,
    symbol,
    royaltyFee,
  ]);

  // Wait for the contract deployment to complete
  await nftMarketplace.waitForDeployment();

  // Log the deployed contract address
  console.log("NFTMarketplace deployed to:", nftMarketplace.target);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0xf950C184866d807e08714645Be6BbfBFCaf7251C