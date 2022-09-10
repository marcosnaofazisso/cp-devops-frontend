import React, { useState, useEffect } from 'react'
import { Div } from './Clientes';
import { Link } from 'react-router-dom';

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
    var url = "http://localhost:8080/api/cliente"

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
            <h1>Editar Cliente</h1>
            <Div>
                <h2>Dados Pessoais</h2>
                <h3>{cliente.id} - {cliente.nome}</h3>
                <p><b>CPF: {cliente.cpf}</b></p>
                <p><b>Email: {cliente.email}</b></p>
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
                        <h3>{endereco.logradouro} , {endereco.numeroEndereco} - {endereco.bairro} - ({endereco.cidade} / {endereco.estado})</h3>
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
                        <h3>{endereco2.logradouro} , {endereco2.numeroEndereco} - {endereco2.bairro} - ({endereco2.cidade} / {endereco2.estado})</h3>
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
                <button onClick={saveChanges}>Salvar Alterações</button>
                <br />
                <button onClick={handleUpdate}>Salvar</button>
                <br />
                <Link title="Voltar para Home" to={`/`}>Voltar</Link>

            </Div>
        </>
    )
}

export default FormEditarCliente