import React from 'react';

class Calculator extends React.Component {
  constructor () {
    super();
    this.state = {
      input1: 0,
      input2: 0,
      result: 0,
    };

    this.setNum1 = event => {
      this.setState({
        input1: parseInt(event.target.value)
      });
    };

    this.setNum2 = event => {
      this.setState({
        input2: parseInt(event.target.value)
      });
    };

    this.add = event => {
      event.preventDefault();
      this.setState({
        result: this.state.input1 + this.state.input2
      });
    };

    this.subtract = event => {
      event.preventDefault();
      this.setState({
        result: this.state.input1 - this.state.input2
      });
    };

    this.multiply = event => {
      event.preventDefault();
      this.setState({
        result: this.state.input1 * this.state.input2
      });
    };

    this.divide = event => {
      event.preventDefault();
      this.setState({
        result: this.state.input1 / this.state.input2
      });
    };
  }

  render () {
    return (
      <div>
        <input type='text' onChange={this.setNum1}></input>
        <input type='text' onChange={this.setNum2}></input>
        <h1>{this.state.result}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
