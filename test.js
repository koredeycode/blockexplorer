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
  // define the transaction hash
  const txHash =
    "0x9843a0525c31fefcce18ad5d801e0d431ddaf6c8f0edb801e5133fe7a5dd8662";

  //Call the method to display the transaction based on the transaction hash
  const response = await alchemy.transact.getTransaction(txHash);

  //Logging the response to the console
  console.log(response);
};

main();
