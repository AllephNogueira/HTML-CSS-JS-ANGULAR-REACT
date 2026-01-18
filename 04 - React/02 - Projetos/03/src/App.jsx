//Style
import './App.css'


// Componentes
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx' 
import SegundoComponente from './componentes/SegundoComponente.jsx'
import TempleteExpressions from './componentes/TempleteExpressions.jsx'
import Eventos from './componentes/Eventos.jsx'

function App() {


  return (
    <div>
        <h1>Criando componentes</h1>
        <PrimeiroComponente />
        <TempleteExpressions />
        <SegundoComponente />
        <Eventos />
        </div>
  )
}

export default App
