function Evento ({numero}) {

    function meuEvento () {
        console.log(`Ativaram-me. ${numero}`)
    }


    return (
        <div>
            <p>clique para ativar o evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento