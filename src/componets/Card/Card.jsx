import React, { Component } from 'react'
export class Card extends Component{
    render(){
        return(
            <div>
                <h4>Email</h4>
                <h5>{this.props.email}</h5>
                <h4>Nome Completo</h4>
                <h5>{this.props.nome} {this.props.sobreNome}</h5>
                <h4>CPF</h4>
                <h5>{this.props.cpf}</h5>
                <h4>Data</h4>
                <h5>{this.props.data}</h5>
                <h4>Genero</h4>
                <h5>{this.props.option}</h5>
            </div>
        )
    }
}

export default Card