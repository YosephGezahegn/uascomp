import Search from './component/Search';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Deptlist from './component/Deptlist';
import TopNav from './component/TopNav';
import AddDept from './component/AddDept';

class App extends Component {
	state = {
		loading: true,
		deptlist: [],
		alert: null,
	};

	searchUsers = async (text) => {
		const res = await axios.get(`/api/department/search/${text}`);
		this.setState({ deptlist: res.data, loading: false });
	};

	clearUsers = () => {
		this.setState({ deptlist: [], deptlist2: [], loading: false });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
	};

	render() {
		return (
			<div>
				<TopNav />
				<Deptlist />
				<AddDept />
			</div>
		);
	}
}

export default App;
/*{this.state.deptlist.map(dept => (
  <div>
  {dept.department_name}
  <hr />
  {dept.duration}
  <hr />
  {dept.extent}
  <hr />
  {dept.tution}
  <hr />
  {dept.studylevel}
  <hr />
  {dept.scholarship}
  <hr />
  {dept.uas_id}
  <hr />
</div>
}*/
