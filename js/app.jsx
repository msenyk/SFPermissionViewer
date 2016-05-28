import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './views/Home.jsx'
import View from './views/View.jsx'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/view" component={View}/>
  </Router>
), document.getElementById('app'))
