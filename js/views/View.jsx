import React from 'react'
import Navbar from '../components/Navbar.jsx'
import SelectPermissionSet from '../components/SelectPermissionSet.jsx'

export default class View extends React.Component {
  render() {
    return (
        <div>
            <Navbar />
            <div className="container">
                { this.props.params.permSetId ?
                    'ID: ' + this.props.params.permSetId
                 : (
                    <div>
                    <h3>Choose Profile or Permission Set:</h3>
                    <SelectPermissionSet />
                    </div>
                   )
                }
            </div>
        </div>
    )
  }
}