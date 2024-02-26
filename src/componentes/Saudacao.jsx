function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo certo?`
    }


    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao