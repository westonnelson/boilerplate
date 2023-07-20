# LayerZero Contract Boilerplate

Simplifying Things From the NFTEarth Team

OFT High-level information
* 		The LayerZero OFT standard is amazing technology, but can also get confusing very fast. 

Importantly, you need to understand there are 3 moving parts that all have to be in sync for the Omnichain functionality to work smoothly. 

1. Deploying the OFT token (whether you are creating a new token deployment or creating a proxy to adjust an existing token)
2. The so-called Wire-Up process: this is where you sync your Trusted Remotes (the other contracts you have deployed), and it is done in a way that concatenates the address on the local chain plus the remote chain. There are a few optional paramaters for you to choose when wiring up your LZero configuration, but the main ones are to set custom adapter to true, set trusted remotes, and set destination gas fees. These will get you started.
3. UA Lockdown - this is short for User Application - and it is what all the cross-chain activity occurs through when you begin sending messages or tokens cross chain. If you wish to maintain complete control of this aspeect, you can do so, but like above, there are certain configurations you need to consider and put into place.

Have fun Omnichaining!

This repo contains the source code built on top of LayerZero that is used by NFTEarth for Omnichain functionality - originally for the ERC-20 of the protocol - but plans are for all NFT activity to become Omnichain in the near future as well.

1) [OFT](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oft-v1) (V1) on the original 7 chains LayerZero initially supported. 

# There are significant benefits of adopting the OFT standard.

From the article showcasing LayerZero tech through BTC.b - 4 are highlighted:

OFT Aims to Maximize Tokens’ Composability
OFT is an extensible token contract. There are four main benefits for tokens adopting the OFT standard.
* 		Own your contracts
* 		Own your security
* 		Own your fees
* 		Let the world compose you
   
-Learn more here: https://medium.com/avalancheavax/layerzero-aims-to-create-one-unified-experience-for-btc-b-339eb4d23672

# Learn about the difference between OFT(v1) and OFTV2 [here](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oft-v1-vs-oftv2-which-should-i-use). 

This repo comes with [LayerZero tooling](https://layerzero.gitbook.io/docs/evm-guides/layerzero-tooling) to [Lock in UA Configuration](https://layerzero.gitbook.io/docs/evm-guides/ua-custom-configuration/lock-in-ua-configuration) and Wire Up Configuration. 
To use the UA Configuration script please fill in your appConfig.json according to this [documentation](https://layerzero.gitbook.io/docs/evm-guides/layerzero-tooling/ua-configuration).
To use the Wire Up Configuration script please fill in your wireUpConfig.json according to this [documentation](https://layerzero.gitbook.io/docs/evm-guides/layerzero-tooling/wire-up-configuration).

## Deploy Setup
1. Add a .env file (to the root project directory) with your MNEMONIC="" and fund your wallet in order to deploy!

## Deploying OFT (V1)

Run the following hardhat commands to deploy OFT to the original 7 chains:
```
npx hardhat deploy --network goerli --tags ExampleOFT
npx hardhat deploy --network bsc-testnet --tags ExampleOFT
npx hardhat deploy --network fuji --tags ExampleOFT
npx hardhat deploy --network mumbai --tags ExampleOFT
npx hardhat deploy --network arbitrum-goerli --tags ExampleOFT
npx hardhat deploy --network optimism-goerli --tags ExampleOFT
npx hardhat deploy --network fantom-testnet --tags ExampleOFT
```
### Wire Up Configuration
Then run the Wire Up Configuration to:
<ul>
    <li>function setTrustedRemote(uint16, bytes)</li>
    <li>function setUseCustomAdapterParams(bool)</li>
    <li>function setMinDstGas(uint16, uint16, uint)</li>
</ul>



```
npx hardhat wireAll --e testnet --config-path "./constants/oftConfig/wireUpConfig.json"
```

### Send OFT accross chains

```
npx hardhat --network fuji oftSend --qty 100000000000000000 --target-network mumbai
```

## Lock down UA config

### OFT (V1)
```
npx hardhat setConfig --config-path "./constants/oftConfig/appConfig.json"
```
![(500 × 500 px)](https://github.com/westonnelson/boilerplate/assets/29180454/7497e94e-b597-46fa-a03f-7680505c72c5)
