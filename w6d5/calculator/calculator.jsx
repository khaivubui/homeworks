import React from 'react';

class Calculator extends React.Component {
  constructor () {
    super();
    this.state = {
      input1: '',
      input2: '',
      result: 0,
    };

    this.setNum1 = event => {
      this.setState({
        input1: (event.target.value)
      });
    };

    this.setNum2 = event => {
      this.setState({
        input2: (event.target.value)
      });
    };

    this.add = event => {
      event.preventDefault();
      this.setState({
        result: parseInt(this.state.input1) + parseInt(this.state.input2)
      });
    };

    this.subtract = event => {
      event.preventDefault();
      this.setState({
        result: parseInt(this.state.input1) - parseInt(this.state.input2)
      });
    };

    this.multiply = event => {
      event.preventDefault();
      this.setState({
        result: parseInt(this.state.input1) * parseInt(this.state.input2)
      });
    };

    this.divide = event => {
      event.preventDefault();
      this.setState({
        result: parseInt(this.state.input1) / parseInt(this.state.input2)
      });
    };

    this.clear = event => {
      event.preventDefault();
      this.setState({
        input1: '',
        input2: '',
        result: 0
      });
    };
  }

  render () {
    const {
      setNum1,
      setNum2,
      add,
      subtract,
      multiply,
      divide,
      clear
    } = this;
    const {
      input1,
      input2,
      result
    } = this.state;
    return (
      <div>
        <input type='text'
               onChange={setNum1}
               value={input1}>
        </input>
        <input type='text'
               onChange={setNum2}
               value={input2}>
        </input>
        <h1>{result}</h1>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={clear}>CLEAR</button>
      </div>
    );
  }
}

export default Calculator;
