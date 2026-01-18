const Eventos = () => {

    const handleAcessarBolsa = (e) => {
        console.log("🚀 ~ handleAcessarBolsa ~ e:", e)
        alert("Você clicou no botao")
    }

    return (
        <div>
            {/* A gente colocar a funçao sem parametros, porque queremos que ela seja executada no clique
            
            Se voce coloca com parametros, a funcao vai ser executada logo quando a pagina abre
            
            handle (Nome padroes para cliques)*/}
            <button onClick={handleAcessarBolsa} >ACESSAR BOLSA DE ESTUDOS</button>

            {/* Outra maneira de fazer eventos com arrow functions
            Dessa maneira o HTML vai entender que só deve rodar quando a gente clicar no bota */}

            <button onClick={() => alert('Clicou no evento')} >Botão para teste de arrow Function</button>
        </div>
    )
}

export default Eventos