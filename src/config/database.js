const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

knex('users').insert({
  name: 'Luiz',
  email: 'lg.luizh@gmail.com',
  password: 'secret'
}).then(data => console.log(data))