import { useState } from 'react'
import './App.css'
import { mockTodos } from './utils/mocks'
import { Todos } from './components/Todos'

function App():JSX.Element {

  const [todos] = useState(mockTodos)

  return (
    <>
      <h1>Aca van los todos</h1>
      <Todos todos={todos} />
    </>
  )
}

export default App
