import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>Permission Analyzer</h1>
    		<ul role="nav">
    			<li><Link to="/view">View</Link></li>
    		</ul>
    	</div>
	)
  }
})