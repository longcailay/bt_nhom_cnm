const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed();
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    "0x2b0b7Ef1144E1CF0818FcB68D4948e150CB1b3dC", // địa chỉ account nhận Daicoin
    "1000000000000000000000"
  );
};
