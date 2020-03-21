import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className="fab fa-github mr-1" />
          Github Finder,
        </h1>
        <ul>
          <li style={{ marginRight: 15 }}>
            <span>Home</span>
          </li>
          <li>
            <span>About</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
