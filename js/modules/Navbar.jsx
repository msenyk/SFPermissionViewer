import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Permission Analyzer</a>
        </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/search">Search Permission</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
})