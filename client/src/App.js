import Search from './component/Search';
import Search2 from './component/Search2';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Deptlist from './component/Deptlist';
import Deptlist2 from './component/Deptlist2';
import TopNav from './component/TopNav';
import AddDept from './component/AddDept';
import DeleteDept from './component/DeleteDept'

class App extends Component {


  render() {
    return (
      <div>
        <TopNav />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Search />
            </div>

            <div className="col-sm-6">
              <Search2 />
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Deptlist />

          </div>

        </div>

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
