import React, { Component } from 'react'
import InputMask from 'react-input-mask'
import './estilo.css'
export class Form extends Component{
    constructor(props){
        super(props);
        this.email = ""
        this.confirmaEmail = ""
        this.nome = ""
        this.sobreNome=""
        this.cpf = ""
        this.tipo = ""
        this.data=""
        this.cpfMark=""
        this.option=""
        this.intem=""
    }
    
    
    header(evento){
        evento.stopPropagation()
        this.intem = (evento.target.value)
        console.log(this.intem)
        
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

    handleInput(e){
        e.stopPropagation()
        this.cpfMark = e.target.value
    }

    handleInputTipo(e){
        e.stopPropagation()
        this.tipo = e.target.value
    }

    handleInputData(e){
        e.stopPropagation()
        this.data = e.target.value
    }

    handleInputOption(e){
        e.stopPropagation()
        this.option = e.target.value
    }

    _criarForm(e){
        e.preventDefault()
        e.stopPropagation()
        if(this.confirmaEmail !== this.email){
            alert("email e confirma email estão difrentes")
        }
        else if(this.nome === "" || this.sobreNome === ""){
            alert("preencha os campos 'nome' e 'sobrenome'")
        }
        else{
        this.props.criarform(this.email, this.confirmaEmail, this.nome, this.sobreNome, this.cpf, this.data, this.option)
        }
    
        
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
                            <InputMask mask="999.999.999-99" name="cpf" placeholder="000.000.000-00" onChange={this.handleInputCPF.bind(this)}></InputMask>                           
                        </div>
                        <div> 
                            <select  className="escolha" value={this.intem} onChange={this.header.bind(this)}>
                                <option></option>
                                <option value="celular">celular</option>
                                <option value="telefone">Telefone</option>
                            </select>

                        </div>
        
                        <div>
                            <section type="option" name="option" onChange={this.handleInputOption.bind(this)}>
                                <input type="radio" value="Radio button1" name="1"/>Radio button1
                                <input type="radio" value="Radio button2" name="2"/>Radio button2
                                <input type="radio" value="Radio button3" name="3"/>Radio button3
                            </section>
                            <section>
                                <input type="date" nome="data" placeholder="00/00/0000" onChange={this.handleInputData.bind(this)}></input>
                            </section>
                        </div>
        
                        <div>
                            <button type="submit">Concluir</button>
                        </div>
        
                    
                    </form>
                    
        )

    }    
    
}

