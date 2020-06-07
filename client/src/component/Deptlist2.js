import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllDepartments } from '../actions/index';
import Dept from './Dept';
import { deleteDepartmentId } from '../actions/index'



class Deptlist extends Component {
	componentDidMount() {
		this.props.fetchAllDepartments()

	}

	render() {

		return (
			<div>
				{this.props.deptlist2.map((dept) => (

					<div className="card text-center">
						<h5>
							id:{dept.id}
							<br />
							Department : {dept.department_name}
							<br />
							duration:{dept.duration}
							<br />
							extent:{dept.extent}
							<br />
							studylevel: {dept.studylevel}
							<br />
							tution: {dept.tution}
							<br />
							Uas: {dept.uas_name}
							<br />
							scholarship: {dept.scholarship ? "available" : "not available"}
						</h5>
						<div>
							<button onClick={() => this.props.deleteDepartmentId(dept.id)}>Delete</button>

						</div>
					</div>
				))}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		deptlist2: state.searchReducer.searchResult2,
	};
}

export default connect(mapStateToProps, { fetchAllDepartments, deleteDepartmentId })(Deptlist);
