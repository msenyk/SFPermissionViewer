import React from 'react'
import {Table} from 'react-bootstrap'

//Dummy data will be removed later
var PRODUCTS = [
  {name: 'Finance', type: 'Permission Set', option: '', id: "00p000123000001DxC"},
  {name: 'Standard User', type: 'Profile', option: 'Standard', id: "00p000123000002DxC"},
  {name: 'System Administrator', type: ' Profile', option: 'Standard', id: "00p000123000003DxC"}
];



var Highlight = React.createClass({
render: function() {
	var word = this.props.word;
	var value = this.props.value;
	return (
		<td><span
		dangerouslySetInnerHTML={{
			__html : value.replace(word, "<strong style='background: rgba(43, 53, 183, 0.85); color: #fff;' className\"match\">" + word + "</strong>")
		}} /></td>
	);
}
});

var PermissionsRow = React.createClass({
render: function() {
return (
<tr>
	<Highlight
	value={this.props.product.name}
	word={this.props.filterText}
	/>
	<Highlight
	value={this.props.product.type}
	word={this.props.filterText}
	/>
	<Highlight
	value={this.props.product.option}
	word={this.props.filterText}
	/>
</tr>
	);
}
});

var TableOfPermissions = React.createClass({
  render: function() {
	var rows = [];
	this.props.products.forEach(function(product) {
		if (product.name.indexOf(this.props.filterText) === -1 && product.type.indexOf(this.props.filterText) === -1 && product.option.indexOf(this.props.filterText) === -1) {
			return;
		}
		rows.push(<PermissionsRow product={product} key={product.name} filterText={this.props.filterText} />);
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
	handleChange: function() {
		this.props.onUserInput(
			this.refs.filterTextInput.value
		);
	},
	render: function() {
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
	getInitialState: function() {
		return {
			filterText: ''
		};
	},
	handleUserInput: function(filterText) {
		this.setState({
			filterText: filterText
		});
	},
	render() {
	return (<div>
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
