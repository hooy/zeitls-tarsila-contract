require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const PRIVATE_KEY = process.env.ETH_API_KEY;

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
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/fd9720021ed34f4f804221e52795f31a`, 0),
      network_id: 11155111,
      // from: "0xeb17c7aAD77146Ee831BDEa8Ffec1F98F0367D0E",
      confirmations: 2,
      timeoutBlocks: 400,
      skipDryRun: false,
      networkCheckTimeout: 1000000,
      gasLimit: 5009834000000000,
      gas: 2500000,
      gasPrice: 68000000000
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/e9fe1139119f44fc8813c6fe327765d8`),
      network_id: 5,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
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
