import React from 'react'
import Navbar from '../components/Navbar.jsx'
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap'


export default React.createClass({
  render() {
    return (
<div>
<Navbar />
<Jumbotron>
	<div className="container">
		<h1>Permission analyzer</h1>
		<Grid>
			<Row className="show-grid">
				<Col xs={6} md={4}><Button href="#/view" block>View</Button></Col>
				<Col xs={6} md={4}><Button block>Diff</Button></Col>
				<Col xs={6} md={4}><Button block>Search Permissions</Button></Col>
			</Row>
		</Grid>
	</div>
</Jumbotron>
</div>
);
  }
})