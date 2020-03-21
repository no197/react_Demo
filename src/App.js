import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import UserList from "./components/UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  callData = async text => {
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ ...this.state, data: data });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Search callData={this.callData} />
          <UserList users={this.state.data} />
        </div>
      </div>
    );
  }
}
export default App;
