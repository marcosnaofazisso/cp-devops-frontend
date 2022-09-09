import './App.css';
import React, { useState } from 'react';
import logo from './assets/logo-dimdim.jpg'

import FormCadastro from './FormCadastro';

import Clientes from './Clientes';
import Enderecos from './Enderecos';

function App() {

  const [formCliente, setFormCliente] = useState(false)
  const [mostrarClientes, setMostrarClientes] = useState(false)
  const [mostrarEnderecos, setMostrarEnderecos] = useState(false)

  return (
    <div className="App">
      <h1>App Dim Dim</h1>
      <img src={logo} alt="Logo DimDim" />
      <div>
        <button onClick={() => setFormCliente(!formCliente)}>Cadastrar Cliente</button>
        {formCliente && (<FormCadastro />)}
      </div>
      <br />
      <div>
        <button onClick={() => setMostrarClientes(!mostrarClientes)}> Buscar clientes</button>
        {mostrarClientes && (<Clientes />)}
      </div>
      <br />
      <div>
        <button onClick={() => setMostrarEnderecos(!mostrarEnderecos)}> Buscar endereços</button>
        {mostrarEnderecos && (<Enderecos />)}
      </div>
    </div>
  );
}

export default App;
