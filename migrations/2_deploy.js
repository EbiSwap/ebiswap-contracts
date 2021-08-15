const MasterChefV2 = artifacts.require("MasterChefV2");
const Token = artifacts.require("EBIToken");

module.exports = async function (deployer) {
  // await deployer.deploy(Token)
  const token = await Token.deployed()
  //
  const devAddr = "0x3E1aA9Ea576a235834e46B77Dc31F957484D3ADA"
  //
  // const startBlock = 18104850;
  //
  // await deployer.deploy(
  //   MasterChefV2,
  //   token.address,
  //   devAddr,
  //   devAddr,
  //   "70000000000000000",
  //   startBlock
  // );
  // const masterChef = await MasterChefV2.deployed();
  // // mint for developer
  // await token.mint(devAddr, "2000000000000000000000")
  // // transfer ownership to masterchef
  // await token.transferOwnership(masterChef.address)
};
