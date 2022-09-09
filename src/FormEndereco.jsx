import React, { useState } from 'react'

function FormEndereco() {

    const [endereco, setEndereco] = useState({
        "rua": "",
    })

    const [cliente, setCliente] = useState({
        "nome": "",
        "endereco": []
    })

    function changeNome(event) {
        setCliente(cliente => ({ ...cliente, nome: event.target.value }))
    }
    function changeEndereco(event) {
        setEndereco(endereco => ({ ...endereco, rua: event.target.value }))
    }
    function enviarInfos() {
        cliente.endereco.push(endereco)
        // setCliente(cliente => ({ ...cliente, endereco: endereco }))
        console.log("Cliente: ", cliente)
        console.log("Endereco: ", endereco)
    }


    return (
        <>
            <h1>Teste</h1>
            <h1>Nome: {cliente.nome}</h1>
            <h1>Rua: {endereco.rua}</h1>
            {/* <h1>Nome: {cliente.endereco.rua}</h1> */}

            <label>Nome</label>
            <input type="text" value={cliente.nome} onChange={changeNome} />
            <br />
            <label>Rua</label>
            <input type="text" value={endereco.rua} onChange={changeEndereco} />
            <br />
            <button onClick={() => enviarInfos()}>Enviar informações</button>

        </>
    )
}

export default FormEndereco;