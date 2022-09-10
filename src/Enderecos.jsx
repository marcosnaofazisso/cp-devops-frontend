import React, { useState, useEffect } from 'react'

function Enderecos() {
    const [enderecos, setEnderecos] = useState([]);

    const url = "https://cp1dimdim.azurewebsites.net/api/endereco"

    useEffect(() => {
        const getEnderecos = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json()
                setEnderecos(data);
                // console.log(JSON.stringify(data));

            } catch (error) {
                console.log("Error:", error)
            }
        }
        getEnderecos();

    }, [])

    return (
        <>
            <h1>Enderecos Cadastrados</h1>
            {enderecos?.map((endereco) => {
                return (
                    <div key={endereco.id}>
                        <h3>{endereco.id} - {endereco.logradouro}, {endereco.numeroEndereco} - {endereco.bairro} ({endereco.cidade}/{endereco.estado})
                        </h3>
                    </div>
                )
            })}

        </>
    )
}

export default Enderecos