import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleOnChange = event => {
    console.log(event.target);
    this.setState({ ...this.state, text: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.callData(this.state.text);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleOnSubmit}>
          <input
            name="text"
            value={this.state.text}
            type="text"
            placeholder="Search user..."
            autoComplete="off"
            onChange={this.handleOnChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block "
          />
        </form>
      </div>
    );
  }
}
