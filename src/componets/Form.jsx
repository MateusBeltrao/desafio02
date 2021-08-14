import React, { Component } from 'react'
import {Input} from './FormInput/Input'
import { Tipo } from './FormTipo/Tipo'
import { Radio } from './FormRadio/Radio'
export class Form extends Component{

    
      

    
       handleSubmit = (e) =>{
      e.placeholder()
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)
      console.log(data)
       }
  
    render(){
        return(
            <form>
            <Input></Input>

            <Tipo></Tipo>

            <Radio></Radio>

            <button type="submit">Concluir</button>
    </form>
        )
    
    }

}