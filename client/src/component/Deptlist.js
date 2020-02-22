import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllDepartments } from '../actions/index';
import Dept from './Dept';

class Deptlist extends Component {
	componentDidMount() {
		const { fetchMovie } = this.props;
		fetchAllDepartments();
	}

	render() {
		console.log(this.props.deptlist.map);
		return (
			<div>
				{this.props.deptlist.map((dept) => (
					<Dept key={dept.id} dept={dept} />
				))}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		deptlist: state.deptReducer.deptsList,
	};
}

export default connect(mapStateToProps, { fetchAllDepartments })(Deptlist);
