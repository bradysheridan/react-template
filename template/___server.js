const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser("lang"))
app.use(session({
  secret: "lang",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set("view engine", "ejs")
app.set('json spaces', 2)
app.set('views', path.join(__dirname, '/public/views'))

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.listen(port)

console.log(`SITE_NAME is listening on localhost:${port}`)

module.exports = app
