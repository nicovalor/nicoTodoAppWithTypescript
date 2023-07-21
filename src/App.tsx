import { useState } from 'react'
import { mockTodos } from './utils/mocks'
import { Todos } from './components/Todos'

function App():JSX.Element {

  const [todos] = useState(mockTodos)

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}

export default App
