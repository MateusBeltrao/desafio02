import React, { Component} from 'react'
export class Tipo extends Component{
    constructor(){
        super()
        this.tipo=""
    }

    handlerTipo = (e) =>{
        this.tipo = e.target.value
        console.log(this.tipo)
    }

    render(){
        return(
            <div> 
                <select className="escolha">
                    <header>telefone</header>
                    <option value="celular">Celular</option>
                    <option value="telefone">Telefone</option>
                </select>
                <section>
                     <input type="number" name="tipo" placeholder="(00) 0000-0000" onChange={this.handlerTipo.bind(this.tipo)}></input>
                </section>
            </div>
        )
    }
}