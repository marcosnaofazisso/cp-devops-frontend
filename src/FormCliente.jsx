import React, { useState } from 'react'

function FormCliente() {

    const [lista, setLista] = useState([])
    const [cliente, setCliente] = useState({
        "nome": "",
        "email": "",
        "cpf": "",
        "dataCadastro": "08/09/2022",
        "endereco": [],
    });
    const url = "http://localhost:8080/api/cliente"


    function changeNome(event) {
        setCliente(cliente => ({ ...cliente, nome: event.target.value }))
    }
    function changeEmail(event) {
        setCliente(cliente => ({ ...cliente, email: event.target.value }))
    }
    function changeCpf(event) {
        setCliente(cliente => ({ ...cliente, cpf: event.target.value }))
    }
    function changeDataCadastro(event) {
        setCliente(cliente => ({ ...cliente, dataCadastro: event.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ cliente }),
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => console.log("RES =>", res.json()))
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <>
            <h1>Form Cliente</h1>
            <h3>Nome: {cliente.nome}</h3>
            <h3>Email:{cliente.email}</h3>
            <h3>CPF: {cliente.cpf}</h3>
            <h3>Data Cadastro: {cliente.dataCadastro}</h3>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input type="text" value={cliente.nome} onChange={changeNome} />
                    <label>Email</label>
                    <input type="text" value={cliente.email} onChange={changeEmail} />
                    <label>CPF</label>
                    <input type="text" value={cliente.cpf} onChange={changeCpf} />
                    <label>Data Cadastro</label>
                    <input type="text" value={cliente.dataCadastro} onChange={changeDataCadastro} />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </>
    )
}

export default FormCliente;