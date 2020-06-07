import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllDepartments } from '../actions/index';
import Dept from './Dept';

class Deptlist extends Component {
	componentDidMount() {
		this.props.fetchAllDepartments()

	}

	render() {

		return (
			<div style={userStyle}>
				{this.props.deptlist.map((dept) => (
					<Dept key={dept.id} dept={dept} />
				))}
			</div>
		);
	}
}
const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "0.5rem",
	color: "white"
};
function mapStateToProps(state) {
	return {
		// deptlist: state.searchReducer.searchResult,
		deptlist: state.deptReducer.deptsList,
	};
}

export default connect(mapStateToProps, { fetchAllDepartments })(Deptlist);
