require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");

const { accounts } = require("./tasks");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

function getMnemonic(networkName) {
  if (networkName) {
    const mnemonic = process.env["MNEMONIC_" + networkName.toUpperCase()];
    if (mnemonic && mnemonic !== "") {
      return mnemonic;
    }
  }

  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic || mnemonic === "") {
    return 'test test test test test test test test test test test junk';
  }

  return mnemonic;
}


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  namedAccounts: {
    deployer: {
      default: 0, // wallet address 0, of the mnemonic in .env
    },
    proxyOwner: {
      default: 1,
    },
  },
  networks: {
    mainnet: { accounts: accounts(0) },
    testnet: { accounts: accounts(0) },
    ethereum: {
      url: "https://mainnet.infura.io/v3/e2a4268d58754f3fac20570df0f99c75", // public infura endpoint
      chainId: 1,
      accounts: accounts(0),
    },
    bsc: {
      url: "https://1rpc.io/bnb",
      chainId: 56,
      accounts: accounts(0),
    },
    avalanche: {
      url: "https://avalanche-mainnet.infura.io/v3/e2a4268d58754f3fac20570df0f99c75",
      chainId: 43114,
      accounts: accounts(0),
    },
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3/e2a4268d58754f3fac20570df0f99c75",
      chainId: 137,
      accounts: accounts(0),
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/e2a4268d58754f3fac20570df0f99c75`,
      chainId: 42161,
      accounts: accounts(0),
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/e2a4268d58754f3fac20570df0f99c75`,
      chainId: 10,
      accounts: accounts(0),
    },
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", // public infura endpoint
      chainId: 5,
      accounts: accounts(0),
    },
    'bsc-testnet': {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      accounts: accounts(0),
    },
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: accounts(0),
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: accounts(0),
    },
    'arbitrum-goerli': {
      url: `https://goerli-rollup.arbitrum.io/rpc/`,
      chainId: 421613,
      accounts: accounts(0),
    },
    'optimism-goerli': {
      url: `https://goerli.optimism.io/`,
      chainId: 420,
      accounts: accounts(0),
    },
  },
  etherscan: {
    apiKey: {
      ethereum: process.env.ETHEREUM_API_KEY,
      bscscan: process.env.BSCSCAN_API_KEY,
      arbiscan: process.env.ARBISCAN_API_KEY,
      optimisticEthereum: process.env.OPTIMISTIC_ETHEREUM_API_KEY,
      avalanche: process.env.AVALANCHE_API_KEY,
      base: process.env.BASE_API_KEY,
      linea: process.env.LINEA_API_KEY
    }
  },
};