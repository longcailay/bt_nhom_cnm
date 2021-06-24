const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed();
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    "0x3312612416525a83c7D62cC3e38456E738BB07E4", // địa chỉ account nhận Daicoin, là cái ví trên matamask luôn
    "1000000000000000000000"
  );
};
