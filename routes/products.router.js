const express = require('express')
const ProductService = require('./../services/products.services')

const {faker} = require('@faker-js/faker') //

const router = express.Router()
const service = new ProductService()



//------------------------------------------------------------

router.get('/', async (req, res)=>{
  const products = await service.find()
  res.json(products)
})

//------------------------------------------------------------

router.get('/filter', (req, res)=>{
  res.send('I`m a filter')
})

router.get('/:id', async (req, res, next)=>{

  try {
    const {id} = req.params
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }


})


router.post('/', async (req, res)=>{
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json({
    message:'created',
    date:body
  })
})


router.patch('/:id', async (req, res)=>{
  try {
    const {id} = req.params
    const body = req.body

    const product = await service.update(id, body)

    res.status(201).json(product)
  } catch (error) {
    res.status(404).json({
      message:"error"
    })
  }
})


router.delete('/:id', async (req, res)=>{
  const {id} = req.params

  const response = await service.delete(id)
  res.json(response)
})

module.exports = router
