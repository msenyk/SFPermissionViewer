import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Jumbotron, Button, Grid, Row, Col, Well } from 'react-bootstrap'


export default React.createClass({
  render() {
    return (
<div>
    <Navbar />
	<Grid>
        <Jumbotron>
            <h1>Permission Analyzer</h1>
            <p>App to see, compare and find all kind of permissions based on Profile and Permission Set</p>
        </Jumbotron>
		<Row className="show-grid">
			<Col sm={12} md={4}>
                <Button href="#/view" block bsSize="large">View</Button>
                <p>
                    Choose profile or permission set and make sure what exactly they allow to do.
                    All permissions at the one page.
                </p>
            </Col>
            <Col sm={12} md={4}><Button block  bsSize="large">Diff</Button></Col>
            <Col sm={12} md={4}><Button block  bsSize="large">Search Permissions</Button></Col>
        </Row>
	</Grid>
</div>
);
  }
})