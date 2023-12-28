require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  plugins: [
      'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETH_API_KEY,
  },
  networks: {
    dev: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*",
        gas: 30000000
    },
    sepolia: {
        provider: () => new HDWalletProvider(mnemonic, `https://rpc.sepolia.org/`, 2),
        network_id: 11155111,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true,
        networkCheckTimeout: 1000000,
        gas: 30000000,
        gasPrice: 3500000000
    },
    eth: {
        provider: () => new HDWalletProvider(mnemonic, `https://ethereum.publicnode.com`, 2),
        network_id: 1,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: false,
        networkCheckTimeout: 1000000,
        gasLimit: 5009834000000000,
        gas: 2500000,
        gasPrice: 40000000000 // 40 gwei
    },
  },
  compilers: {
    solc: {
      version: "0.8.17",
      optimizer: {
        enabled: true,
        runs: 200,
      },
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
  },
}
