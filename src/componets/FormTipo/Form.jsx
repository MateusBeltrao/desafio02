import React, { Component } from 'react'
export class Form extends Component{
    constructor(props){
        super(props);
        this.email = "";
        this.confirmaEmail = ""
        this.nome = ""
        this.sobreNome=""
        this.cpf = ""
        this.tipo = ""

    }


    handleInputEmail(e){
        e.stopPropagation()
        this.email = e.target.value
        
    }

    handleInputConfirma(e){
        e.stopPropagation()
        this.confirmaEmail = e.target.value
    }

    handleInputNome(e){
        e.stopPropagation()
        this.nome = e.target.value
    }

    handleInputSobreNome(e){
        e.stopPropagation()
        this.sobreNome = e.target.value
    }

    handleInputCPF(e){
        e.stopPropagation()
        this.cpf = e.target.value
    }

    handleInputTipo(e){
        e.stopPropagation()
        this.tipo = e.target.value
    }

    _criarForm(e){
        e.preventDefault()
        e.stopPropagation()
        this.props.criarform(this.email, this.confirmaEmail, this.nome, this.sobreNome, this.cpf)
       }

            render(){
                return(
                    <form className="formCadastro" onSubmit={this._criarForm.bind(this)}>
                        <div className="input">
                            <header>Email</header>
                            <input type="email" name="email" placeholder="email@email.com" onChange={this.handleInputEmail.bind(this)}></input>
                            <header>Confirme o email</header>
                            <input type="email" name="confirmaEmail" placeholder="email@mail.com" onChange={this.handleInputConfirma.bind(this)}></input>
                            <header>Nome</header>
                            <input type="text" name="nome" placeholder="mateus" onChange={this.handleInputNome.bind(this)}></input>
                            <header>Sobrenome</header>
                            <input type="text" name="sobreNome" placeholder="beltrão" onChange={this.handleInputSobreNome.bind(this)}></input>
                            <header>CPF</header>
                            <input type="number" name="cpf" placeholder="000.000.000-00" onChange={this.handleInputCPF.bind(this)}></input>
                        </div>
        
                        <div> 
                            <select className="escolha">
                                telefone
                                <option value="celular">Celular</option>
                                <option value="telefone">Telefone</option>
                            </select>
                            <section>
                                <input type="number" name="tipo" placeholder="(00) 0000-0000" onChange={this.handleInputTipo.bind(this)}></input>
                            </section>
                        </div>
        
                        <div>
                            <section>
                                <input type="radio" value="Radio button1" name="1"/>Radio button1
                                <input type="radio" value="Radio button2" name="2"/>Radio button2
                                <input type="radio" value="Radio button3" name="3"/>Radio button3
                            </section>
                            <section>
                                <input type="number" placeholder="00/00/0000"></input>
                            </section>
                        </div>
        
                        <div>
                            <button type="submit">Concluir</button>
                        </div>
        
                    
                    </form>
                    
        )

    }    
    
}

