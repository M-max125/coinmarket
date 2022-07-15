//const hre = require("hardhat");
const {ethers} = require("hardhat");

const main = async () => {
  const dogeFactory = await ethers.getContractFactory("DogeCoin");
  const dogeContract = await dogeFactory.deploy();

  await dogeContract.deployed();
  console.log(`Doge contract deployed at ${dogeContract.address}`);

  const linkFactory = await ethers.getContractFactory("Link");
  const linkContract = await linkFactory.deploy();

  await linkContract.deployed();
  console.log(`Link token deployed at ${linkContract.address}`);

  const daiFactory = await ethers.getContractFactory("Dai");
  const daiContract = await daiFactory.deploy();

  await daiContract.deployed();
  console.log(`Dai token deployed at ${daiContract.address}`);

  const usdcFactory = await ethers.getContractFactory("Usdc");
  const usdcContract = await usdcFactory.deploy();

  await usdcContract.deployed();
  console.log(`Usdc token deployed at ${usdcContract.address}`);
}
  ; (async () => {
    try {
      await main();
      process.exit(0);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })()