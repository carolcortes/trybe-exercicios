import React from 'react';

class Button extends React.Component {
  constructor() {
    super()
    this.state = { countClick: 0 }
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick() {
    this.setState((previousState) => ({
      countClick: previousState.countClick + 1,
    }))
    console.log(this.buttonColor(this.state.previousState))
  }

  buttonColor = (number) => number % 2 === 0 ? 'green' : 'red';

  render() {
    const { countClick } = this.state;
    return <button
     onClick={this.handleClick}
     style={{backgroundColor: this.buttonColor(countClick)}}
     >
      {countClick}
    </button>
  }
}

export default Button;