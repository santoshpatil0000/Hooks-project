import React, { Component } from "react";

class ClassCount2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  increament = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  decreament = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  increamentFive = () => {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  };

  render() {
    return (
      <div>
        Count by class : {this.state.count}
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increament}>Increament</button>
        <button onClick={this.decreament}>Decreament</button>
        <button onClick={this.increamentFive}>Increament by 5</button>
      </div>
    );
  }
}

export default ClassCount2;
