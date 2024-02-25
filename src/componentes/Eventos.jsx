import Button from "./botoes/Button"

function Evento ({numero}) {

    function meuEvento () {
        console.log(`Ativaram-me. ${numero}`)
    }


    return (
        <div>
            <p>clique para ativar o evento:</p>
            <Button event={meuEvento} text='Primeiro Evento' />
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento