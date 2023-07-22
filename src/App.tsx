import { useState } from 'react'
import { mockTodos } from './utils/mocks'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './utils/consts'
import { type FilterValue } from './utils/types'
import { Footer } from './components/Footer'

function App():JSX.Element {

  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const activeCount = todos.filter(task => !task.completed).length;
  const completedCount = todos.length - activeCount;
  
  const filteredTasks = todos.filter( task => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !task.completed;
    if(filterSelected === TODO_FILTERS.COMPLETED) return task.completed;
    return task
  })


  const handleRemove = ( id: string ): void =>{
    const newTodos = todos.filter( task => task.id !== id)
    setTodos(newTodos)
  }

  const handleDone = ( id:string, completed:boolean ): void => {
    const newTodos = todos.map( task => {
      if(task.id === id){
        return {
          ...task,
          completed
          }
        }
        return task
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const onClearComplete = (): void =>{
    const newTasks = todos.filter( task => !task.completed)
    setTodos(newTasks)
  }


  return (
    <div className='todoapp'>
      <Todos 
        onRemove={handleRemove}
        onCompleted={handleDone}
        todos={filteredTasks} />

      <Footer 
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
        onClearComplete={onClearComplete}
      />
    </div>
  )
}

export default App
