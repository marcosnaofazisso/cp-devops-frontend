import React, { useState, useEffect } from 'react'

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
                console.log(JSON.stringify(data));

            } catch (error) {
                console.log("Error:", error)
            }
        }
        getClientes();

    }, [])

    return (
        <>
            <h1>Clientes Cadastrados</h1>
            {clientes?.map((cliente, index) => {
                return (
                    <div key={index}>
                        <h3>{cliente.nome}</h3>
                        <p>{cliente.email}</p>
                        <p>{cliente.cpf}</p>
                    </div>
                )
            })}

        </>
    )
}

export default Clientes