import React, { Component } from 'react';

class Dept extends Component {
	render() {
		const {
			department_name,
			duration,
			extent,
			id,
			scholarship,
			studylevel,
			tution,
			uas_id,
		} = this.props.dept;

		return (
			<div className="card text-center">
				<h1>
					{department_name}
					<br />
					{duration}
					<br />
					{extent}
					<br />
					{studylevel}
					<br />
					{tution},
				</h1>
			</div>
		);
	}
}

export default Dept;
