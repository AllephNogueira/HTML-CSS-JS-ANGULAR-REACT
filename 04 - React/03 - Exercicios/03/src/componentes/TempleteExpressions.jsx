const TempleteExpressions = () => {

    const dados = {
        nome : "Alleph",
        profissao : "Programador",
        estado : "RJ"

    }

    return (
        <div>
            <h1>Ola {dados.nome} tudo bem?</h1>
            <h2>Carregando dados....</h2>
            <h3>Profissao {dados.profissao}</h3>
            <h3>Profissao {dados.estado}</h3>
        </div>
    )
}

export default TempleteExpressions