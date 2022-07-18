import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: ".env" })


const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.SPEEDY_NODE,
      accounts:[process.env.ACCOUNT!]
    }
  }
};

export default config;
