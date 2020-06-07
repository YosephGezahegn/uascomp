import React, { Component } from "react";
import { search2 } from '../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Search extends Component {
  state = {
    text: ""
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      alert("please enter text", "light");
    } else {
      this.props.search2(this.state.text);

    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    deptlist: state.deptReducer.deptsList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search2 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

