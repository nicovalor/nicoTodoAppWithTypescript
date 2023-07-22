import { useState } from 'react'
import { mockTodos } from './utils/mocks'
import { Todos } from './components/Todos'

function App():JSX.Element {

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ( id: string ): void =>{
    const newTodos = todos.filter( task => task.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos 
        onRemove={handleRemove}
        todos={todos} />
    </div>
  )
}

export default App
