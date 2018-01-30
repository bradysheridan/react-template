
##### `./template`
Contains directory structure, code, and node modules that I use on virtually all of my React projects.

##### `./template/___server.js`
Handles Node server configuration
- Sets root `express` directory to `./public/`
- Enables `body-parser`
- Enables `cookie-parser`
- Sets view engine to EJS
- Sets root views directory to `./public/views`
- Sets up CORS headers
- Starts listening on port (env port or port 8080, by default)

##### `./template/__routes.js`
Handles `express` routes. The three default template routes are:
1. `/` which loads `./public/views/pages/index.ejs`
1. `/other` which also loads `./public/views/pages/index.ejs`, however, `react-router`

##### Adding a new route
1. Add a new `express` route in `./__routes.js`:
```
app.get('/new-route', function(req, res) {
  res.render('pages/index')
})
```
2. Add a new `react-router` route in `./public/react/apps/APP_NAME/src/app.js`:
```
<Route path={'/new-route'} component={NewRouteComponent} />
```
