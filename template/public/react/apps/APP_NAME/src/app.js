import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Root, Home, Other } from './containers'

render((
  <Router history={browserHistory}>
    <Route path={"/"} component={Root}>
      <IndexRoute component={Home} />
      <Route path={"/other"} component={Other} />
    </Route>
  </Router>
), document.getElementById('app'))
