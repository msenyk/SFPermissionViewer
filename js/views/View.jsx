import React from 'react'
import Navbar from '../components/Navbar.jsx'
import SelectPermissionSet from '../components/SelectPermissionSet.jsx'

export default React.createClass({
  render() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h3>Choose Profile or Permission Set:</h3>
                <SelectPermissionSet />
            </div>
        </div>
    )
  }
})