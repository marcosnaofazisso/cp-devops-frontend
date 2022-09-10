import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BtnDeletar = styled.button`
    height:2rem !important;
    margin-bottom:1rem;
    background-color: red !important;
    cursor:pointer;
`
export const Div = styled.div`
    border:1px solid #888888;
    margin-right:1rem;
    margin-top:1rem;
`

function Clientes() {

    const [clientes, setClientes] = useState([]);

    // const url = "https://cp1dimdim.azurewebsites.net/api/cliente"
    const url = "http://localhost:8080/api/cliente"

    useEffect(() => {
        const getClientes = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json()
                setClientes(data);
                // console.log(JSON.stringify(data));
            } catch (error) {
                console.log("Error:", error)
            }
        }
        getClientes();

    }, [])

    const deletarCliente = (id) => {
        fetch(url + "/" + id, { method: 'DELETE' })
            .then((res) => console.log("DELETE Status Code:", res.status))

        const data = clientes.filter(cliente => cliente.id !== id)
        setClientes(data)
    }


    return (
        <>
            <h1>Clientes Cadastrados</h1>
            {clientes?.map((cliente) => {
                return (
                    <Div key={cliente.id}>
                        <h3>{cliente.id} - {cliente.nome}</h3>
                        <p><b>CPF: {cliente.cpf}</b></p>
                        <p><b>Email: {cliente.email}</b></p>
                        {cliente.endereco.map(endereco => {
                            return (
                                <div key={endereco.id}>
                                    <h3>{endereco.logradouro}, {endereco.numeroEndereco} -
                                        {endereco.bairro} ({endereco.cidade}/{endereco.estado})</h3>
                                </div>
                            )
                        })}
                        <Link title="aa" to={`/editar/${cliente.id}`}>Editar</Link>
                        <BtnDeletar onClick={() => deletarCliente(cliente.id)}>Deletar</BtnDeletar>
                    </Div>
                )
            })}
        </>
    )
}

export default Clientes