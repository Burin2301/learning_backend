const {faker} = require('@faker-js/faker')
const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
  const users = []

  const {size} = req.query
  const limit = size || 10

  for (let index = 0; index < limit; index++) {
    users.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      personalId: faker.string.numeric({length:10})
    });
  }

  res.json(users)

})

module.exports = router
