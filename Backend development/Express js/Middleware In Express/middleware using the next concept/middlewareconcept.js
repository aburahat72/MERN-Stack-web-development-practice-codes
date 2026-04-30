const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))

//Here iam writing the middleware function
app.use((req, res, next) => {
    console.log('logged the account')
    res.send('logged the account')
    // if i used next() and also res.send then it will give an error because we cannot send multiple responses to the same request
    // next()
    // next is used to send the control to the next middleware function in the stack
})

// middleware 2 
app.use((req, res, next) => {
    console.log('middleware 2')
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
  res.send('contact us: 8134545099')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
