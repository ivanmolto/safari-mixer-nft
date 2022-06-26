# SAFARI MIXER NFT

A dynamic, random, and unlimited NFT collection.
Mint your new brand animal and start your safari!

Live demo at [www.safarimixer.com](https://www.safarimixer.com)
Another demo [link](https://safari-mixer-nft.vercel.app)

Presentation in PDF format [here](https://github.com/ivanmolto/safari-mixer-nft/blob/master/presentation/safari-mixer-nft-ivanmolto.pdf)

NFT collection in OpenSea [here](https://testnets.opensea.io/collection/safarimixernft-utqeajd6wk)

The GitHub repo for the smart contract is [here](https://github.com/ivanmolto/safari-mixer-smart-contracts)

This is submission for an Advanced Fullstack Challenge for the [Polygon](https://polygon.technology) hackathon by [Encode](https://www.encode.club), June 2022.

## Introduction

This project builds an **unlimited**, **dynamic**, and **random** (with different chances) generated NFT collection minter smart contract and interacts with a React frontend.

Dynamic based on the price of MATIC (binary value based on 1 MATIC >= 1 USD or 1 MATIC < 1 USD) from a Chainlink Data feed.

Chances for random are:
[5, 10, 15, 20, 25, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 72, 76, 80, 83, 86, 89, 91, 93, 95, 97, 99, MAX_CHANCE_VALUE];

For these animals: antelope, buffalo, bunny, cat, chicken, crocodile, dinosaur, dog, duck, elephant, flamingo, fox, frog, giraffe, gorilla, hippo, hyena, leopard, lion, lizard, ostrich, pig, puma, rhino, sheep, tiger, tortoise, and unicorn.


## Smart contract address (Verified)

Please find the GitHub repo for the smart contract [here](https://github.com/ivanmolto/safari-mixer-smart-contracts)

Contract address: 0x95B4f2897B96e94Ce73aAF1298EaE00Bd01defCb
[Check it here](https://mumbai.polygonscan.com/address/0x95B4f2897B96e94Ce73aAF1298EaE00Bd01defCb)

This project includes the following contracts:
- SafariMixerNFT.sol
- VRFCoordinatorV2Mock.sol (mock)
- MockV3Aggregator.sol (mock)

And scripts with task implementations:
- 00-deploy-mocks.js
- 01-deploy-nft.js
- 02-mint.js


## Setup Smart Contract repo

First, please clone the repo and install the dependencies with the below commands:

```
git clone https://github.com/ivanmolto/safari-mixer-smart-contracts.git
cd safari-mixer-smart-contracts
npm install
```

To compile run in the terminal the following command:
`npx hardhat compile`

To deploy run in the terminal the following command:
`npx hardhat deploy --network polygonMumbai`

To mint run in the terminal the following command:
`npx hardhat deploy --tags mint --network polygonMumbai`


## OpenSea collection

See NFT collection in OpenSea [here](https://testnets.opensea.io/collection/safarimixernft-utqeajd6wk)


## Images

All images and token URIs are stored in IPFS (used Pinata.cloud) 


## Chainlink Data Feed and Verifiable Random Function

Used Polygon (Matic) Data Feed: 
- MATIC / USD [see here](https://mumbai.polygonscan.com/address/0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada) for getting the NFT images dynamically and imported "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol"

Used Chainlink Verifiable Randomness Function: 
As a method to secure randomness for the smart contract getting the images and imported 
- "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol"
- "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol"

Created also the subscription 728 [see here](https://vrf.chain.link/mumbai)


## License

The code is licensed under a MIT License.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run: 
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


