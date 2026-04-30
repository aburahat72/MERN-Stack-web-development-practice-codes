var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})
router.get('/blogsposts/:slug', (req, res) => {
  res.send(`fetch the blogs for the ${req.params.slug}`)
})

module.exports = router
