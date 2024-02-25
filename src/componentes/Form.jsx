import { useState } from "react"


function Form () {

    function cadastrarUsuario (e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return (
        <div>
            <h1>cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        />
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form