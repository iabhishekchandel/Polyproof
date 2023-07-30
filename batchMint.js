const { ethers } = require("ethers");
const fs = require("fs");

async function main() {
  // Read the contract ABI from the JSON file
  const contractABI = require("./NFTCollection.json");

  // Replace <contract_address> with the actual contract address.
  const contractAddress = "0xc2aA76983F8CD9dD66e7822649CC98C02e7ef7a2";

  // Specify the private key of the signer
  const privateKey = "e53e992be5c5e480faf364b6ec0ec4a963fd4ccb9b160c016208c0c9462deff6";

  // Connect to the Ethereum provider
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

  // Create a signer instance using the private key
  const signer = new ethers.Wallet(privateKey, provider);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // Read the IPFS URLs for the NFT images from a file
  const ipfsUrls = fs.readFileSync("ipfs_urls.txt", "utf-8").split("\n");

  // Mint NFTs with the IPFS URLs
  for (let i = 0; i < ipfsUrls.length; i++) {
    await contract.mint(ipfsUrls[i]);
  }

  console.log("Batch minting complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
