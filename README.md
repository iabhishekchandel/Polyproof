# Project Title

Building with Polygon Bridge

## Description

This project consists of smart contract code and hardhat JavaScript scripts for batch minting NFTs and performing batch transfers of NFTs from Goerli Ethereum Testnet to Polygon Mumbai using the FxPortal Bridge.

## Getting Started

### Prerequisites

- Node.js (version 12 or above)
- Hardhat (for compiling and deploying smart contracts)
- MetaMask browser extension

### Executing Program
To run the solidity code, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Steps to interact with the contract using Remix:

1. Open the contract file in Remix IDE.
2. Select the appropriate compiler version.
3. Compile the contract.
4. Click on the "Deploy & Run Transactions" tab in the Remix editor. From the "Environment" dropdown, select the desired development environment (Injected Web3).
5. Ensure that you have the contract deployed.

## Installation
1. Clone the repository:

```
git clone https://github.com/your-username/your-repository.git
```

2. Install the dependencies:

```
cd your-repository
npm install
```

### Minting NFTs

After successful deployment,you will get a `contract address`.

1. Update the `batchMint.js` script with that `contract address` and `private key` of your wallet account.

2. Create a file named `ipfs_urls.txt` and add the IPFS URLs for the NFT images, each URL on a new line.

3. Run the script to mint the NFTs:

```
node batchMint.js
```

### Mapping 

Map Your NFT Collection using `Polygon network token mapper`. 

### Batch Transfer of NFTs

After successful Mapping you will get a `child address` also known as `fxPortalBridge` address.

1. Update the `batchTransfer.js` script with that deployed `contract address`, `fxPortalBridge address` , and your `private key`.

2. Run the script to transfer all minted NFTs to the  Polygon Mumbai network :

```
node batchTransfer.js
```


## Author 

Abhishek 

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
