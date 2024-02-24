import Item from "./Item"

function List() {
    return (
        <>
            <h1>uma lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={2020} />
                <Item marca='Lambourghini' ano_lancamento={2021} />
                <Item marca='Fiat' ano_lancamento={2022} />
            </ul>
        </>
    )
}

export default List