import React from 'react'

function FormEndereco() {
    return (
        <>
            <h1>Form Endereço</h1>
            <div>
                <form>
                    <label>Logradouro</label>
                    <input type="text" />
                    <label>Bairro</label>
                    <input type="text" />
                    <label>Cidade</label>
                    <input type="text" />
                    <label>UF:
                        <select>
                            <option value="SP">SP</option>
                            <option value="RJ">RJ</option>
                            <option value="ES">ES</option>
                            <option value="SC">SC</option>
                        </select>
                    </label>
                    <button>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default FormEndereco;