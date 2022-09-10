import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'



const Container = styled.div`
    max-width :50%;
    min-height :110rem;
    display: block;
    text-align : center;
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

const DivBtn = styled.div`
    display:flex;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
    font-size:16px;
    justify-content:space-around;
    button {
        width:10rem;
        height:3rem;    
        font-weight:bold;
        color:white;
        background-color:green;
        border:none;
        border-radius:0.7rem;
        margin-left:5rem;
        cursor: pointer;
    }
    a {
        padding:1rem 3rem;
        margin-right:5rem;
        font-weight:bold;
        color:white;
        background-color:grey;
        border:none;
        border-radius:0.7rem;
        text-decoration:none;
        cursor: pointer;
    }

`





function FormEditarCliente(props) {

    const [cliente, setCliente] = useState({});
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
    const [mensagem, setMensagem] = useState(false)

    let id = null;

    var url ="http://localhost:8080/api/cliente"
    // var url = "https://cp1dimdim.azurewebsites.net/api/cliente"

    if (props.match.path.toLowerCase().includes('editar')) {
        id = props.match.params.id
        url = "http://localhost:8080/api/cliente/" + id
    }

    useEffect(() => {
        const getClientes = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json()
                setCliente(data);
                setEndereco(data.endereco[0])
                if (data.endereco.length > 1) { setEndereco2(data.endereco[1]) }
                // console.log(JSON.stringify(data));
            } catch (error) {
                console.log("Error:", error)
            }
        }
        getClientes();

    }, [id])


    function handleChangeCliente(event) {
        setCliente(cliente => ({ ...cliente, [event.target.name]: event.target.value }))
    }
    function handleChangeEndereco(event) {
        setEndereco(endereco => ({ ...endereco, [event.target.name]: event.target.value }))
    }
    function handleChangeEndereco2(event) {
        setEndereco2(endereco2 => ({ ...endereco2, [event.target.name]: event.target.value }))
    }

    const saveChanges = () => {
        if (endereco2.cep !== "") {
            setCliente(cliente => ({ ...cliente, endereco: [endereco, endereco2] }))
        } else {
            setCliente(cliente => ({ ...cliente, endereco: [endereco] }))
        }

    }
    const handleUpdate = () => {
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        })
            .then((res) => console.log("PUT Status Code: ", res.status))
            .then(setMensagem(!mensagem))

    }

    return (
        <>
            <Container> 
            <h1>Editar Cliente</h1>
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
                {endereco &&
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
                    </div>}
                {endereco2.cep !== "" ? (
                    <div>
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
                    </div>
                ) : ""}
                <h1>{mensagem ? 'Informações enviadas com sucesso!' : ''}</h1>
                <br />
                    <DivBtn>
                        <button onClick={saveChanges}>Salvar Alterações</button>
                        <br />
                        <button onClick={handleUpdate}>Salvar</button>
                        <br />
                        <Link title="Voltar para Home" to={`/`}>Voltar</Link>
                    </DivBtn>

            
            </Container>
        </>
    )
}

export default FormEditarCliente