import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Teste usuario {count}, {setCount}</h1>
      <p className='NovoElemento'>Novo elemento adicionado</p>
    </div>
    
  )
}

export default App
