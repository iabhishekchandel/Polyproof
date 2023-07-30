const { ethers } = require("ethers");

async function main() {
  //It will read the contract ABI from the JSON file
  const contractABI = require("./NFTCollection.json");

  // Replace <contract_address> with the actual contract address
  const contractAddress = "0xc2aA76983F8CD9dD66e7822649CC98C02e7ef7a2";

  // Replace <recipient_address> with the address you want to transfer the NFTs to
  const fxPortalBridgeAddress  = "0x10033A2D3B619b40a4D0957af9D2a72C9B978E2c";

  // Replace <private_key> with your private key
  const privateKey = "e53e992be5c5e480faf364b6ec0ec4a963fd4ccb9b160c016208c0c9462deff6";

  // Replace <rpc_provider> with your RPC provider URL
  const rpcProvider = "http://127.0.0.1:8545";

  // Connect to the Ethereum provider
  const provider = new ethers.providers.JsonRpcProvider(rpcProvider);

  // Create a signer instance using the private key
  const signer = new ethers.Wallet(privateKey, provider);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // Transfer all minted NFTs to the recipient address
  await contract.transferAll(fxPortalBridgeAddress );

  console.log("Batch transfer complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
