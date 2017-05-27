// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    mainnet: {
      host: 'localhost',
      port: 8545,
      network_id: 1,
      gas: 400000,
      gasPrice: 20000000000
    }
  }
}
