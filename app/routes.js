const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Example route
router.get('/hello', function (req, res) {
  res.render('index')
})

module.exports = router

