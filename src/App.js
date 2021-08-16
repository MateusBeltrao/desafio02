import React, { Component} from 'react';
import { Form } from './componets/FormTipo/Form';
import './App.css';
import { Lista } from './componets/Lista/Lista';
class App extends Component {

  constructor(){
    super()
    this.state = {
      notas:[]
    }
  }

  criarform(email, confirmaEmail, nome, sobreNome, cpf, data, option){
    const novaNota = {email, confirmaEmail, nome, sobreNome, cpf, data, option}
    const novoArrayNotas = [...this.state.notas , novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    } 
    this.setState(novoEstado)
  }

  render (){
    return(
      <section className="conteudo">
        <Form criarform={this.criarform.bind(this)}></Form>
        <Lista className="conteudo-principal" notas={this.state.notas}></Lista>
      </section>
    )
  }
  
}

export default App;
