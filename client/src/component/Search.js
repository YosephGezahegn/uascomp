import React, { Component } from "react";
import { search } from '../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Button, Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';

export class Search extends Component {
  state = {
    text: ""
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      alert("please enter text", "light");
    } else {
      this.props.search(this.state.text);

    }
  };
  handleSearch = () => {
    this.props.search(this.state.text)
  }
  onSelect = e => {
    this.setState({ text: e.target.value });
  };


  render() {
    console.log(this.state.text)

    const dataSource = this.props.deptlist.map((dep) => dep.department_name)
    return (
      <div>
        <AutoComplete

          className="global-search"
          size="large"
          style={{ width: '100%' }}
          allowClear="true"
          dataSource={dataSource}
          onSelect={(value) => this.setState({ text: value })}
          onSearch={() => { this.props.search(this.state.text) }}
          placeholder="input here"
        >
          <Input
            suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
                onClick={this.onSubmit}
              >
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>

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
  return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

