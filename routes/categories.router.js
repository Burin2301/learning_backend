const express = require("express")
const {faker} = require('@faker-js/faker')

const router = express.Router()

router.get('/', (req, res)=>{
  const categories = []
  const {size} = req.query
  const limit = size ||5

  for (let index = 0; index < limit; index++) {
    categories.push({
      name: faker.commerce.department()
    });

  }

  res.json(categories)
} )

router.get('/:categoryId/products/:productId', (req, res)=>{
  const {categoryId, productId} = req.params
  res.json(
    {
      "categoryId": categoryId,
      "productId": productId
    }
  )
} )

// TAREA > endpoint products from category
router.get('/:catId/products/:prodId/items/', (req, res)=>{
  const {catId, prodId} = req.params
  res.json({
    "category": catId,
    "products": prodId,
    "items": [
      {
        "name": "phone",
        "price": 1000
      },
      {
        "name": "laptop",
        "price": 10000
      }
    ]
  })
})


module.exports = router
