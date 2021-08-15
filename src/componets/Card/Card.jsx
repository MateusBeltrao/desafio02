import React, { Component } from 'react'
export class Card extends Component{
    render(){
        return(
            <section>
                <header>Email</header>
                <h4>{this.props.email}</h4>
                <header>Nome Completo</header>
                <h4>{this.props.nome} {this.props.sobreNome}</h4>
                <h4>CPF</h4>
                <h4>{this.props.cpf}</h4>
            </section>
        )
    }
}

export default Card