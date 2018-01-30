const app = require('./___server')

app.get('/', function(req, res) {
  res.render('pages/index')
})

app.get('/other', function(req, res) {
  res.render('pages/index')
})

app.get('/js-disabled', function(req, res) {
  res.send("It's " + new Date().getFullYear() + ". Go to your browser's settings and enable Javascript!")
})

module.exports = app
