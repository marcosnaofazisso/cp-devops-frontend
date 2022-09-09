import React, { useState } from 'react'

function FormCadastro() {

    const [mensagem, setMensagem] = useState(false)
    const [novoEndereco, setNovoEndereco] = useState(false)
    const [cliente, setCliente] = useState({
        "nome": "",
        "email": "",
        "cpf": "",
        "endereco": []
    });
    const [endereco, setEndereco] = useState([{
        "cep": "",
        "logradouro": "",
        "numeroEndereco": "",
        "cidade": "",
        "bairro": "",
        "estado": "",
    }])
    const [endereco2, setEndereco2] = useState([{
        "cep": "",
        "logradouro": "",
        "numeroEndereco": "",
        "cidade": "",
        "bairro": "",
        "estado": "",
    }])

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
    function changeLogradouro(event) {
        setEndereco(endereco => ({ ...endereco, logradouro: event.target.value }))
    }
    function changeNumeroLogradouro(event) {
        setEndereco(endereco => ({ ...endereco, numeroEndereco: event.target.value }))
    }
    function changeBairro(event) {
        setEndereco(endereco => ({ ...endereco, bairro: event.target.value }))
    }
    function changeCidade(event) {
        setEndereco(endereco => ({ ...endereco, cidade: event.target.value }))
    }
    function changeEstado(event) {
        setEndereco(endereco => ({ ...endereco, estado: event.target.value }))
    }
    function changeCep(event) {
        setEndereco(endereco => ({ ...endereco, cep: event.target.value }))
    }





    function changeLogradouro2(event) {
        setEndereco2(endereco2 => ({ ...endereco2, logradouro: event.target.value }))
    }
    function changeNumeroLogradouro2(event) {
        setEndereco(endereco2 => ({ ...endereco2, numeroEndereco: event.target.value }))
    }
    function changeBairro2(event) {
        setEndereco2(endereco2 => ({ ...endereco2, bairro: event.target.value }))
    }
    function changeCidade2(event) {
        setEndereco2(endereco2 => ({ ...endereco2, cidade: event.target.value }))
    }
    function changeEstado2(event) {
        setEndereco2(endereco2 => ({ ...endereco2, estado: event.target.value }))
    }
    function changeCep2(event) {
        setEndereco2(endereco2 => ({ ...endereco2, cep: event.target.value }))
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
                setEndereco([{
                    "cep": "",
                    "logradouro": "",
                    "numeroEndereco": "",
                    "cidade": "",
                    "bairro": "",
                    "estado": "",
                }]))
            .catch((err) => { console.log(err.message) })
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Formulário de Cadastro</h1>
                        <h2>Dados Pessoais</h2>
                        {/* <h3>Nome: {cliente.nome}</h3>
                        <h3>Email:{cliente.email}</h3>
                        <h3>CPF: {cliente.cpf}</h3> */}
                        <label>Nome</label>
                        <input type="text" value={cliente.nome} onChange={changeNome} required />
                        <br />
                        <label>Email</label>
                        <input type="text" value={cliente.email} onChange={changeEmail} required />
                        <br />
                        <label>CPF</label>
                        <input type="text" value={cliente.cpf} onChange={changeCpf} required />
                        <br />
                    </div>
                    <div>
                        <h2>Dados de Endereço</h2>
                        {/* <h3>Logradouro: {endereco.logradouro}</h3>
                        <h3>Número: {endereco.numeroEndereco}</h3>
                        <h3>Cidade: {endereco.cidade}</h3>
                        <h3>Bairro:{endereco.bairro}</h3>
                        <h3>CEP: {endereco.cep}</h3>  */}
                        <label>Logradouro</label>
                        <input type="text" value={endereco.logradouro} onChange={changeLogradouro} />
                        <br />
                        <label>Número</label>
                        <input type="text" value={endereco.numeroEndereco} onChange={changeNumeroLogradouro} />
                        <br />
                        <label>Bairro</label>
                        <input type="text" value={endereco.bairro} onChange={changeBairro} />
                        <br />
                        <label>Cidade</label>
                        <input type="text" value={endereco.cidade} onChange={changeCidade} />
                        <br />
                        <label>Estado</label>
                        <input type="text" value={endereco.estado} onChange={changeEstado} />
                        <br />
                        <label>CEP</label>
                        <input type="text" value={endereco.cep} onChange={changeCep} />
                    </div>
                    <br />
                    <br />
                    <input type="submit" value="Enviar" />
                    <br />
                    <br />
                </form>
                {!novoEndereco && <button onClick={() => setNovoEndereco(!novoEndereco)}>Adicionar novo endereço</button>}
                {novoEndereco && (
                    <div>
                        <h2>Endereço Adicional</h2>
                        <label>Logradouro</label>
                        <input type="text" value={endereco2.logradouro} onChange={changeLogradouro2} />
                        <br />
                        <label>Número</label>
                        <input type="text" value={endereco2.numeroEndereco} onChange={changeNumeroLogradouro2} />
                        <br />
                        <label>Bairro</label>
                        <input type="text" value={endereco2.bairro} onChange={changeBairro2} />
                        <br />
                        <label>Cidade</label>
                        <input type="text" value={endereco2.cidade} onChange={changeCidade2} />
                        <br />
                        <label>Estado</label>
                        <input type="text" value={endereco2.estado} onChange={changeEstado2} />
                        <br />
                        <label>CEP</label>
                        <input type="text" value={endereco2.cep} onChange={changeCep2} />
                        <br />
                        <br />
                        <button onClick={() => setNovoEndereco(!novoEndereco)}>Cancelar</button>
                        <br />
                        <br />
                        <button onClick={() => alert("São permitidos no máx 2 endereços!")}>Adicionar novo endereço</button>
                    </div>
                )}

                <h1>{mensagem ? 'Informações enviadas com sucesso!' : ''}</h1>
            </div>
        </>
    )
}

export default FormCadastro;