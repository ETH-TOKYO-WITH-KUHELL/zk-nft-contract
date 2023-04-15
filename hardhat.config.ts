import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const MUMBAI_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mumbai:{
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  }
};
export default config;