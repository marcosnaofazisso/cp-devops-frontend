import React, { useState, useEffect } from 'react'

function Clientes() {

    const [clientes, setClientes] = useState([]);

    const url = "https://cp1dimdim.azurewebsites.net/api/cliente"

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
                    <div key={cliente.id}>
                        <h3>{cliente.id} - {cliente.nome}</h3>
                        <p><b>CPF: {cliente.cpf}</b></p>
                        <p><b>Email: {cliente.email}</b></p>
                        {cliente.endereco.map(endereco => {
                            return (
                                <div key={endereco.id}>
                                    <p>{endereco.logradouro},{endereco.numeroEndereco} -
                                        {endereco.bairro} ({endereco.cidade}/{endereco.estado}</p>
                                </div>
                            )
                        })}
                        <button onClick={() => deletarCliente(cliente.id)}>Deletar</button>
                    </div>
                )
            })}
        </>
    )
}

export default Clientes