import './App.css';
import React, { useState } from 'react';
import logo from './assets/logo-dimdim.jpg'
import styled from 'styled-components'
import FormCadastro from './FormCadastro';
import Clientes from './Clientes';

function Home() {

  const [formCliente, setFormCliente] = useState(false)
  const [mostrarClientes, setMostrarClientes] = useState(false)

  const Container = styled.div`
    max-width :50%;
    min-height :110rem;
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
    border-radius:10px;
    background-color:white;
    box-shadow: 0px 2px 9px 4px #8F8D8D;
    h1{
    font-size:42px;
    padding:25px;
    font-weight: bold;
    font-family:monospace;
  }
  `

  const NewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top:0.5rem;
  padding-bottom:50px;
  `

  const Btn = styled.div`
  display: block;
  width: 30rem;
  height:30rem;
  margin-left:auto;
  margin-right:auto;
  Button{
    width:10rem;
    height:3rem;
    font-size:14px;
    font-weight:bold;
    color:white;
    background-color:orange;
    border:none;
    border-radius:0.7rem;
    cursor: pointer;
  }
 `

  const BtnBuscar = styled.button`
   background-color: blue !important;
 `


  return (
    <Container className="App" >
      <h1>App Dim Dim</h1>
      <img src={logo} alt="Logo DimDim" />
      <NewContainer>
        <Btn >
          <button onClick={() => setFormCliente(!formCliente)}>Cadastrar Cliente</button>
          {formCliente && (<FormCadastro />)}
        </Btn >
        <Btn >
          <BtnBuscar onClick={() => setMostrarClientes(!mostrarClientes)}> Buscar clientes</BtnBuscar>
          {mostrarClientes && (<Clientes />)}
        </Btn >
      </NewContainer>
    </Container>

  );
}

export default Home;
