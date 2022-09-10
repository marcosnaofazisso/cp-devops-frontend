import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width:10rem;
    height:2rem;
    font-size:14px;
    font-weight:bold;
    color:white;
    border:none;
    border-radius:0.7rem;
    background-color: green;
    cursor:pointer;

`

const Form = styled.form`
    label{
        display: inline-block;
        width: 90px;
    }
    input{
        margin-bottom:1rem;
    }
`

const Div = styled.div`
    label{
        display: inline-block;
        width: 90px;
        font-size:16px
    }
    input{
        margin-bottom:1rem;
        padding-left:10px;
        font-size:14px
    }
`

const BtnDeletar = styled.button`
    height:2rem !important;
    margin-bottom:1rem;
    background-color: red !important;
    cursor:pointer;
`



function FormCadastro() {

    const [mensagem, setMensagem] = useState(false)
    const [novoEndereco, setNovoEndereco] = useState(false)
    const [cliente, setCliente] = useState({
        "nome": "",
        "email": "",
        "cpf": "",
        "endereco": []
    });
    const [endereco, setEndereco] = useState({
        "cep": "",
        "logradouro": "",
        "numeroEndereco": "",
        "cidade": "",
        "bairro": "",
        "estado": "",
    })
    const [endereco2, setEndereco2] = useState({
        "cep": "",
        "logradouro": "",
        "numeroEndereco": "",
        "cidade": "",
        "bairro": "",
        "estado": "",
    })

    // const url = "https://cp1dimdim.azurewebsites.net/api/cliente"
    const url ="http://localhost:8080/api/cliente"
    

    function handleChangeCliente(event) {
        setCliente(cliente => ({ ...cliente, [event.target.name]: event.target.value }))
    }
    function handleChangeEndereco(event) {
        setEndereco(endereco => ({ ...endereco, [event.target.name]: event.target.value }))
    }

    function handleChangeEndereco2(event) {
        setEndereco2(endereco2 => ({ ...endereco2, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (e) => {
        cliente.endereco.push(endereco)
        if (novoEndereco) { cliente.endereco.push(endereco2) }
        console.log("DATA =>", JSON.stringify(cliente))
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            mode: 'cors',
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
            .then((res) => console.log("POST Status Code: ", res.status))
            .then(
                setMensagem(mensagem => !mensagem),
                setCliente({
                    "nome": "",
                    "email": "",
                    "cpf": "",
                    "endereco": []
                }))
            .then(
                setEndereco({
                    "cep": "",
                    "logradouro": "",
                    "numeroEndereco": "",
                    "cidade": "",
                    "bairro": "",
                    "estado": "",
                }))
            .then(
                setEndereco2({
                    "cep": "",
                    "logradouro": "",
                    "numeroEndereco": "",
                    "cidade": "",
                    "bairro": "",
                    "estado": "",
                }))
            .catch((err) => { console.log(err.message) })
    }


    return (
        <>
            <div>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <h1>Formulário de Cadastro</h1>
                        <h2>Dados Pessoais</h2>
                        <label>Nome</label>
                        <input type="text" name="nome" value={cliente.nome} onChange={handleChangeCliente} required />
                        <br />
                        <label>Email</label>
                        <input type="text" name="email" value={cliente.email} onChange={handleChangeCliente} required />
                        <br />
                        <label>CPF</label>
                        <input type="text" name="cpf" value={cliente.cpf} onChange={handleChangeCliente} required />
                        <br />
                    </div>
                    <div>
                        <h2>Dados de Endereço</h2>
                        <label>Logradouro</label>
                        <input type="text" name="logradouro" value={endereco.logradouro} onChange={handleChangeEndereco} />
                        <br />
                        <label>Número</label>
                        <input type="text" name="numeroEndereco" value={endereco.numeroEndereco} onChange={handleChangeEndereco} />
                        <br />
                        <label>Bairro</label>
                        <input type="text" name="bairro" value={endereco.bairro} onChange={handleChangeEndereco} />
                        <br />
                        <label>Cidade</label>
                        <input type="text" name="cidade" value={endereco.cidade} onChange={handleChangeEndereco} />
                        <br />
                        <label>Estado</label>
                        <input type="text" name="estado" value={endereco.estado} onChange={handleChangeEndereco} />
                        <br />
                        <label>CEP</label>
                        <input type="text" name="cep" value={endereco.cep} onChange={handleChangeEndereco} />
                    </div>
                    <br />
                    <br />
                    <Input type="submit" value="Enviar" />
                    <br />
                    <br />
                </Form>
                {!novoEndereco && <button onClick={() => setNovoEndereco(!novoEndereco)}>Adicionar novo endereço</button>}
                {novoEndereco && (
                    <Div>
                        <h2>Endereço Adicional</h2>
                        <label>Logradouro</label>
                        <input type="text" name="logradouro" value={endereco2.logradouro} onChange={handleChangeEndereco2} />
                        <br />
                        <label>Número</label>
                        <input type="text" name="numeroEndereco" value={endereco2.numeroEndereco} onChange={handleChangeEndereco2} />
                        <br />
                        <label>Bairro</label>
                        <input type="text" name="bairro" value={endereco2.bairro} onChange={handleChangeEndereco2} />
                        <br />
                        <label>Cidade</label>
                        <input type="text" name="cidade" value={endereco2.cidade} onChange={handleChangeEndereco2} />
                        <br />
                        <label>Estado</label>
                        <input type="text" name="estado" value={endereco2.estado} onChange={handleChangeEndereco2} />
                        <br />
                        <label>CEP</label>
                        <input type="text" name="cep" value={endereco2.cep} onChange={handleChangeEndereco2} />
                        <br />
                        <br />
                        <BtnDeletar onClick={() => setNovoEndereco(!novoEndereco)}>Cancelar</BtnDeletar>
                        <br />
                        <br />
                        {/* <button onClick={() => alert("São permitidos no máx 2 endereços!")}>Adicionar novo endereço</button> */}
                    </Div>
                )}

                <h3>{mensagem ? 'Informações enviadas com sucesso!' : ''}</h3>
            </div>
        </>
    )
}

export default FormCadastro;