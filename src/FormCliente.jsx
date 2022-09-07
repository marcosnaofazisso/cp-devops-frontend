import React from 'react'

function FormCliente() {
    return (
        <>
            <h1>Form Cliente</h1>
            <div>
                <form>
                <label>Nome</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="text" />
                    <label>CPF</label>
                    <input type="text" />
                    <button>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default FormCliente;