import React, { Component } from "react";

import "./App.css";

class App extends Component {
  
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="vertical-inline-flex">
        <div className="horizontal-inline-flex bg-651fff">
          <div className="flex__mid-container direction--column max-w-768">
            <h1 className="margin-tb-20 color--ffffff font-w--300 ">Users</h1>
          </div>
        </div>

        <div className="horizontal-inline-flex">
          <div className="flex__mid-container direction--column max-w-768 margin-t-30">
            <ul>
              {this.state.users.map(user => (
                <li
                  className="cssr-card bg-ffffff pad-tb-10"
                  key={user.id}
                >
                  {user.username}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
