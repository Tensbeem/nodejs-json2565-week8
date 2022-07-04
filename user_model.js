const {readFileSync} = require('fs')

loadUser = () =>  JSON.parse(readFileSync('users.json'))

module.exports = {loadUser}