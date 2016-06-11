import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './views/Home.jsx'
import Search from './views/SearchPermission.jsx'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/search" component={Search}/>
  </Router>
), document.getElementById('app'))
