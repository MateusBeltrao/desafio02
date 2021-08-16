import React, { Component } from 'react'
import Card from "../Card/Card"
export class Lista extends Component{
    
    render(){
        return(
            <ul>
                    {this.props.notas.map((nota, index)=>{
                        return(
                            <li key={index}>
                               <Card email={nota.email} nome={nota.nome} sobreNome={nota.sobreNome} cpf={nota.cpf} data={nota.data} option={nota.option}></Card> 
                            </li>
                        )
                    })}
            </ul>
        )
    }

}
