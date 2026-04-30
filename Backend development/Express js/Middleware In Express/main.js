const express = require('express')
var birds = require('./routes/birds')
const app = express()
const fs = require('fs')
const port = 3000


app.use('/birds', birds)
app.use(express.static("public"))

//Middleware m1
//Here iam writing the middleware function
app.use((req, res, next) => {

  // Here iam modify the request object by adding a new property called rahat and assigning it a value of "iam studies at manipal university jaipur"
  console.log(req.headers)
  req.rahat = "iam studies at manipal university jaipur"

  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  next()
    // next is used to send the control to the next middleware function in the stack
})

// middleware m2 
app.use((req, res, next) => {
    // console.log(`${Date.now()}`)
    next()
    // next is used to send the control to the next middleware function in the stack
})



app.get('/', (req, res) => {
  res.send('Hello World RAhat!')
})

app.get('/about', (req, res) => {
  res.send('myself abu rahat barb studies at manipal')
})

app.get('/contact', (req, res) => {
  res.send('contact us: 8134545099' + req.rahat)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
