const path = require("path");

module.exports = {

  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 7545,
      network_id: "*",
      host: "localhost",
    },
  },
  compilers: {
    solc: {
      version: "0.8.9"
    }
  }
};