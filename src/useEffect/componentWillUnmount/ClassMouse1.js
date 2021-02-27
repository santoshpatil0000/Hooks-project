import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  mouseMovement = (e) => {
    console.log(`changes as per mouse movement (ClassMouse.js)`);

    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    console.log("componentDidMount activated only once (ClassMouse.js)");
    window.addEventListener("mousemove", this.mouseMovement);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount activated (ClassMouse1.js)`);
    window.removeEventListener("mousemove", this.mouseMovement);
  }

  render() {
    return (
      <div>
        <h3>
          class x:{this.state.x} y:{this.state.y}
        </h3>
      </div>
    );
  }
}

export default ClassMouse;
