const express = require('express')
const app = express()
const port = 3000

// This is the middlware concept to giving the access the content of public folder
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) =>{
  res.send('Hello abu you are styding at manipal')
})

// Here iam  using the http link as a parameter

app.get('/contact/:slug/:second', (req, res) =>{
  res.send(`hello ${req.params.slug} and ${req.params.second}`)
  console.log(res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// if i make like this the endspoints , it will unable to handle the endpoints
