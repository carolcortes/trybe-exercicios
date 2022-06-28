import React from 'react';

class Input extends React.Component {
  render () {
    const { inputName, name, handleChange, type, children } = this.props;
    return (
      <label htmlFor={inputName}>
        { children }
        <input type={type} name={inputName} value={name} onChange={handleChange} />
      </label>
    )
  }
}

export default Input;
