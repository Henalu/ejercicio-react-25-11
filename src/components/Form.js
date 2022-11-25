import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { email:'', password:'' };
        console.log("Entro en el constructor");
    }

    email = (value)=> {
        this.setState({
            email: value
        })
    }
    pass = (value)=> {
        this.setState({
            password: value
        })
    }
    console = ()=>{
        console.log(this.state.email, this.state.password)
    }

  render() {
    return (
      <div>
        <div id='form'>
            <label>{this.state.email}</label>
            <input type='text' placeholder='Escribe tu email' onChange={e=> this.email(e.target.value)}/>
            <label>{this.state.password}</label>
            <input type='password' placeholder='Escribe tu contraseña' onChange={e=> this.pass(e.target.value)}/>
            <button onClick={this.console}>Enviar</button>
        </div>
      </div>
    )
  }
}

export default Form

