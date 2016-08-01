import React from 'react'
import {Table} from 'react-bootstrap'

//Dummy data will be removed later
let PRODUCTS = [
	{name: 'Finance', type: 'Permission Set', option: '', id: "00p000123000001DxC"},
	{name: 'Standard User', type: 'Profile', option: 'Standard', id: "00p000123000002DxC"},
	{name: 'System Administrator', type: ' Profile', option: 'Standard', id: "00p000123000003DxC"}
];


var Highlight = React.createClass({
	render() {
		const word = this.props.word;
		const value = this.props.value;
		function replacer(sub) {
			return "<strong style='background: rgba(43, 53, 183, 0.85); color: #fff;' className\"match\">"+
				sub +"</strong>"
		}
		return (
			<span
				dangerouslySetInnerHTML={{
					__html : value.replace(new RegExp(word, 'ig'), replacer)
				}}
			/>
		);
	}
});

var PermissionsRow = React.createClass({
	render() {
		return (
			<tr>
				<td>
					<Highlight value={this.props.product.name} word={this.props.filterText} />
				</td><td>
					<Highlight value={this.props.product.type} word={this.props.filterText} />
				</td><td>
					<Highlight value={this.props.product.option} word={this.props.filterText} />
				</td>
			</tr>
		);
	}
});

var TableOfPermissions = React.createClass({
	render() {
		const rows = [];
		const searchKey = this.props.filterText.toLowerCase();
		function matchFound(field) {
			return field && field.toLowerCase().indexOf(searchKey) !== -1;
		}
		this.props.products.forEach(function(product) {
			if ( matchFound(product.name) || matchFound(product.type) || matchFound(product.option) ) {
				rows.push(<PermissionsRow product={product} key={product.id} filterText={this.props.filterText} />);
			}
		}.bind(this));
		return (
			<Table striped bordered condensed hover>
				<thead>
				  <tr>
				    <th>Name</th>
				    <th>Type</th>
				    <th>Option</th>
				  </tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		);
	}
})

var Search = React.createClass({
	handleChange() {
		this.props.onUserInput(
			this.refs.filterTextInput.value
		);
	},
	render() {
		return (
	<form className="form-group pull-right">
		<input
		type="text"
		placeholder="Search..."
		value={this.props.filterText}
		className="form-control"
		ref="filterTextInput"
		onChange={this.handleChange}
		/>
		{' '}
	</form>
			);
	}
})

export default React.createClass({
	getInitialState() {
		return {
			filterText: ''
		};
	},
	handleUserInput(filterText) {
		this.setState({
			filterText: filterText
		});
	},
	render() {
		return (
			<div>
				<Search
				filterText={this.state.filterText}
				onUserInput={this.handleUserInput}
				/>
				<TableOfPermissions
				products={PRODUCTS}
				filterText={this.state.filterText}
				 />
			</div>
		);
	}
})
