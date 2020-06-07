import React, { Component } from 'react';

class Dept extends Component {


	render() {
		const {
			id, department_name, uas_name, department_id, duration, extent, studylevel, tution, scholarship } = this.props.dept;


		return (
			<div className="card text-left"  >
				<h5>

					Department : {department_name}
					<br />
							duration:{duration}
					<br />
							extent:{extent}
					<br />
							studylevel: {studylevel}
					<br />
							tution: {tution}
					<br />
							Uas: {uas_name}
					<br />
							scholarship: {scholarship ? "available" : "not available"}
				</h5>

			</div>
		);
	}
}

export default Dept;
