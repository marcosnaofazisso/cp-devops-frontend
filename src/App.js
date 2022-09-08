import './App.css';
import React, { useState } from 'react';
import logo from './assets/logo-dimdim.jpg'

import FormCliente from './FormCliente';
import FormEndereco from './FormEndereco'

import Clientes from './Clientes';
import Enderecos from './Enderecos';

function App() {

  const [formCliente, setFormCliente] = useState(false)
  const [formEndereco, setFormEndereco] = useState(false)
  const [mostrarClientes, setMostrarClientes] = useState(false)
  const [mostrarEnderecos, setMostrarEnderecos] = useState(false)


  return (
    <div className="App">
      <h1>App Dim Dim</h1>
      <img src={logo} alt="Logo DimDim" />
      <div>
        <button onClick={() => setFormCliente(!formCliente)}>Cadastrar Cliente</button>
        {formCliente && (<FormCliente />)}
        <button onClick={() => setFormEndereco(!formEndereco)}>Cadastrar Endereço</button>
        {formEndereco && (<FormEndereco />)}
      </div>
      <div>
        <button onClick={() => setMostrarClientes(!mostrarClientes)}> Buscar clientes</button>
        {mostrarClientes && (<Clientes />)}
        <button onClick={() => setMostrarEnderecos(!mostrarEnderecos)}> Buscar endereços</button>
        {mostrarEnderecos && (<Enderecos />)}
      </div>
    </div>
  );
}

export default App;
