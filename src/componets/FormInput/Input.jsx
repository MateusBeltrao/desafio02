import React, { Component } from 'react'
export class Input extends Component{
    constructor(){
        super()
        this.email = ""
        this.confirmaEmail = ""
        this.nome = ""
        this.nome = ""
        this.sobreNome=""
        this.cpf = ""

    }

    handleInputEmail = (e)=>{
        this.email = e.target.value
        console.log(this.email)
    }

    handleInputConfirma = (e) =>{
        this.confirmaEmail = e.target.value
        console.log(this.confirmaEmail)
    }

    handleInputNome = (e) =>{
        this.nome = e.target.value
    }

    handleInputSobreNome = (e) =>{
        this.sobreNome = e.target.value
    }

    handleInputCPF = (e)=>{
        this.cpf = e.target.value
    }

        render(){
            return(
                <div className="input">
                    <header>Email</header>
                    <input type="text" name="email" placeholder="email@email.com" onChange={this.handleInputEmail.bind(this)}></input>
                    <header>Confirme o email</header>
                    <input type="text" name="confirmaEmail" placeholder="email@mail.com" onChange={this.handleInputConfirma.bind(this)}></input>
                    <header>Nome</header>
                    <input type="text" name="nome" placeholder="mateus" onChange={this.handleInputNome.bind(this)}></input>
                    <header>Sobrenome</header>
                    <input type="text" name="sobreNome" placeholder="beltrão" onChange={this.handleInputConfirma.bind(this)}></input>
                    <header>CPF</header>
                    <input type="number" name="number" placeholder="000.000.000-00" onChange={this.handleInputCPF.bind(this)}></input>
                </div>
            )
        }


}
