import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
    <Navbar inverse>
    <style type="text/css">{`
      .navbar {
          margin-bottom: 0;
      }
    `}</style>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#/">Permission Analyzer</a>
        </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li><Link to="/">Home Page</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
})