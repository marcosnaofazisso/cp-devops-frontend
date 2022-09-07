import './App.css';
import React, { useState } from 'react';
import FormCliente from './FormCliente';
import FormEndereco from './FormEndereco'

import { useFetch } from './hooks/useFetch';

function App() {

  const [formCliente, setFormCliente] = useState(false)
  const [formEndereco, setFormEndereco] = useState(false)

  const url = ""

  return (
    <div className="App">
      <h1>App Dim Dim</h1>
      <h2>Logo</h2>
      <div>
        <button onClick={() => setFormCliente(!formCliente)}>Cadastrar Cliente</button>
        {formCliente && (<FormCliente />)}
        <button onClick={() => setFormEndereco(!formEndereco)}>Cadastrar Endereço</button>
        {formEndereco && (<FormEndereco />)}
      </div>
      <div>
        <button onClick={useFetch(url)}> Buscar clientes</button>
        <button onClick={useFetch(url)}> Buscar endereços</button>
      </div>
    </div>
  );
}

export default App;
