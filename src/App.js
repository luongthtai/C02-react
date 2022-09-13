import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="container">
        <div>
          <h2>Value: {this.state.count}</h2>
        </div>
        <div className="button">
          <button
            type="button"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default App;
