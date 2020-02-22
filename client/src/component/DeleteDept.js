import React, { Component } from "react";
import Axios from "axios";

class DeleteDept extends Component {
  deleteMember(member) {
    var data = {
      id: member.id
    };
    axios.delete("/api/department/", id).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    });
  }

  render() {
    return (
      <div>
        <a onClick={() => this.deleteMember(member)}>Delete</a>
      </div>
    );
  }
}

export default DeleteDept;
