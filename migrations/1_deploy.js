const TarsilaNft = artifacts.require("TarsilaNft");

module.exports = async function(deployer) {

    await deployer.deploy(TarsilaNft, "0x7AeA2070ec1be39Df1F67A58dbA6ce097442b082", "0xa5409ec958C83C3f309868babACA7c86DCB077c1");
    const instance = await TarsilaNft.deployed();
    console.log(instance.address);
}