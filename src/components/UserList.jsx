import React, { Component } from "react";

class UserList extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div style={userStyle}>
        {this.props.users &&
          this.props.users.items.map(user => (
            <h1 key={user.id}> {user.login}</h1>
          ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default UserList;
