// Imports the Alchemy SDK
const { Alchemy, Network } = require("alchemy-sdk");

// Configures the Alchemy SDK
const config = {
  apiKey: "alchemy-replit", // Replace with your API key
  network: Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

const main = async () => {
  //Assign the hash to a variable
  let txHash = 23;

  //Call the method to return the block with transactions
  let response = await alchemy.core.getBlockWithTransactions(txHash);

  //Logging the response to the console
  console.log(response);
};

main();
