import React, { useState, useEffect } from 'react'

function Enderecos() {
    const [enderecos, setEnderecos] = useState([]);

    // const url = "https://cp1dimdim.azurewebsites.net/api/endereco"
    const url = "http://localhost:8080/api/endereco"

    useEffect(() => {
        const getEnderecos = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json()
                setEnderecos(data);
                console.log(JSON.stringify(data));

            } catch (error) {
                console.log("Error:", error)
            }
        }
        getEnderecos();

    }, [])

    return (
        <>
            <h1>Enderecos Cadastrados</h1>
            {enderecos?.map((endereco, index) => {
                return (
                    <div key={index}>
                        <h5>{index+1} - Rua {endereco.logradouro},{endereco.numeroEndereco}</h5>
                        <p>Bairro: {endereco.bairro}</p>
                        <p>{endereco.cidade} - {endereco.estado}</p>
                    </div>
                )
            })}

        </>
    )
}

export default Enderecos