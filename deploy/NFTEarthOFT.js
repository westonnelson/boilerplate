const MAINNET_DEPLOY_CONFIG = require("../constants/oftConfig/deployConfig.json")
const LZ_ENDPOINTS = require("@layerzerolabs/lz-sdk");

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const name = TESTNET_DEPLOY_CONFIG["NFTEarthOFT"].tokenName;
    const symbol = TESTNET_DEPLOY_CONFIG["NFTEarthOFT"].tokenSymbol;
    const lzEndpointAddress = LZ_ENDPOINTS.LZ_ADDRESS[hre.network.name]
    console.log({name, symbol, lzEndpointAddress})

    await deploy("NFTEarthOFT", {
        from: deployer,
        args: [name, symbol, lzEndpointAddress],
        log: true,
        waitConfirmations: 1,
        skipIfAlreadyDeployed: true
    })
}

module.exports.tags = ["NFTEarthOFT"]
