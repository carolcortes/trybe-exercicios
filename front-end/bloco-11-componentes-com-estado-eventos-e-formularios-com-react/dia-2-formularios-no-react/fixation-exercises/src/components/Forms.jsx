import React from 'react';
import Input from './Input';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: 0,
      obs: '',
      checkbox: false,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }
  
  render() {
    const { name, email, age, obs, checkbox } = this.state;
    return (
      <div>
        <h1>Formulário no React</h1>
        <form>
          <fieldset>
            <legend>Informações Pessoais</legend>
            <Input children="Nome:"type="text" inputName="name" name={name} handleChange={this.handleChange}/>
            <Input inputName="email" type="email" name={email} handleChange={this.handleChange} children="Email:" />
            <label htmlFor="age">
              Idade:
              <select name="age" id="age" value={age} onChange={this.handleChange}>
                <option value="">Selecione</option>
                <option value="adult">Maior do que 18 anos</option>
                <option value="underage">Menor do que 18 anos</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Observações e Arquivo</legend>
            <label htmlFor="obs">
              Observações:
              <textarea name="obs" id="obs" cols="30" rows="10" onChange={this.handleChange} value={obs} />
            </label>
            <label htmlFor="checkbox">
              <input type="checkbox" name="checkbox" onChange={this.handleChange} checked={checkbox}/>
            </label>
            <input type="file" name="file" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Forms;
