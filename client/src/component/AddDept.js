import React, { Component } from "react";
import axios from "axios";

class AddDept extends Component {
  constructor(props) {
    super(props);

    this.state = {
      department_name: "",
      duration: "",
      extent: "",
      tution: "",
      studylevel: "",
      scholarship: true,
      uas_id: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      department_name,
      duration,
      extent,
      tution,
      studylevel,
      scholarship,
      uas_id
    } = this.state;

    const dept = {
      department_name,
      duration,
      extent,
      tution,
      studylevel,
      scholarship,
      uas_id
    };

    axios
      .post("/api/department/", dept)
      .then(() => console.log("Department Created"))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="department_name"
                placeholder="department_name"
                onChange={this.handleInputChange}
              />
            </div>
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="duration"
                placeholder="duration"
                onChange={this.handleInputChange}
              />
            </div>

            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="extent"
                placeholder="extent"
                onChange={this.handleInputChange}
              />
            </div>
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="tution"
                placeholder="tution"
                onChange={this.handleInputChange}
              />
            </div>
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="studylevel"
                placeholder="studylevel"
                onChange={this.handleInputChange}
              />
            </div>
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="scholarship"
                placeholder="scholarship"
                onChange={this.handleInputChange}
              />
            </div>

            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="uas_id"
                placeholder="uas_id"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddDept;
