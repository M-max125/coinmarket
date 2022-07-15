//import { HardhatUserConfig } from "hardhat/types/config";

//import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.SPEEDY_NODE,
      accounts:[process.env.ACCOUNT!]
    }
  }
};


