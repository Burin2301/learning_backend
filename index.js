const routerApi = require('./routes')
const express = require('express')

const app = express()

const port = 3000



app.use(express.json())



app.get('/', (req, res)=>{
  res.send('Hello, Server on Express')
})



app.listen(port, ()=>{
  console.log('Everything working at localhost:' + port);

})



routerApi(app)
