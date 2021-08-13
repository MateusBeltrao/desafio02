import React, { useState } from 'react';
import './App.css';

function App() {

    const [formValues, setFormValues] = useState ({})

    const handleInputChange = (e) =>{
      const {name, value} = e.target
      setFormValues({...formValues, [name]: value})
    }
    
    const handleSubmit = (e) =>{
      e.placeholder()
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)
      console.log(data)
    }
  
    console.log(formValues)

  return (
    
    <form onSubmit={handleSubmit}>
      <header>Email</header>
      <input type="text" name="email" placeholder="email@email.com" onChange={handleInputChange} value={formValues.email || ''}></input>
      <header>Confirme o email</header>
      <input type="text" name="confirmaEmail" placeholder="email@email.com" onChange={handleInputChange} value={formValues.confirmaEmail || ''}></input>
      <header>Nome</header>
      <input type="text" name="nome" placeholder="nome" onChange={handleInputChange} value={formValues.nome || ''}></input>
      <header>Sobrenome</header>
      <input type="text" name="nome" placeholder="sobrenome" onChange={handleInputChange} value={formValues.sobrenome || ''}></input>
      <header></header>CPF
      <input type="text" name="cpf" placeholder="cpf" onChange={handleInputChange} value={formValues.cpf || ''}></input>

    {/*  
      <select name="tipos">
        <option value="celular">celular</option>
        <option value="telefone">telefone</option>
      </select>
    */}
      
      
      <div className="radio">
        <input type="radio" value="1" name="gênero"/>Radio Button1
        <input type="radio" value="2" name="gênero"/>Radio Button2
        <input type="radio" value="3" name="gênero"/>Radio Button3
        </div>
        

      <button type="submit">Concluir</button>
    </form>
  );
}

export default App;
