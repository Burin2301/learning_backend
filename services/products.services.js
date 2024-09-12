const {faker} = require('@faker-js/faker')

class ProductService {

  constructor(){
    this.products = [];
    this.generate();
  }



  generate(){
    const limit = 50

  for (let index = 0; index < limit; index++) {
    this.products.push({
      id:faker.string.numeric({length:4}),
      name:faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.url()
      })
    }
  };

  async find(){
    // return this.products
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.products)
      },1000)
    })
  };


  async findOne(id){

    const name = this.getTotal()

    return this.products.find(item=>item.id === id)
  };


  async create(data){
    const newProduct = {
      id:faker.string.numeric({length:4}),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  };


  async update(id, changes){
    const index = this.products.findIndex(item=>item.id===id)
    if(index === -1){
      throw new Error('Product Not Found');
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index]
  };


  async delete(id){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('Product Not Found');
    }
    this.products.splice(index, 1)
    return {
      message: "item deleted",
      item: id
    }
  };

}

module.exports = ProductService
