require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/117cc53e58944a7f9cb40cdf2c890a84",
      // public key: 0xc06B657DAEF2527165fCddF88673905F6cC60721 (uz macbook Metamask account 1)
      accounts: ['0x78fb8da928b54b3ccab0e3ef5daec44f20c1f943d1fd0cb1057f5bf0134581d6'] // private key
    }
  }
};
