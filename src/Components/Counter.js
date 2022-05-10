import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // Use this.setState() to add 1 to the count
  };

  render() {
    return (
      <>
        <h1>The count is: {this.state.count}</h1>
        {/* pass a prop called onClick to the button */}
        <button>+1</button>
      </>
    );
  }
}

export default Counter;