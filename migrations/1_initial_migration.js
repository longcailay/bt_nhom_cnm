const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed();
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    "0xfBa1a020D9Ca1b5eE7c3ADFA712e97730b68561D", // địa chỉ account nhận Daicoin, là cái ví trên matamask luôn
    "1000000000000000000000"
  );
};
