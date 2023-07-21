import { type ListOfTodos } from "../utils/types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
}

export const Todos: React.FC<Props> = ( { todos } )=>{
    return (
        <>
            <ul className="todo-list">
                {todos.map(  task  => {
                    return (
                        <li key={task.id}
                            className={`${task.done} ? "completed" : ""`}>    
                                <Todo key={task.id} id={task.id} title={task.title} done={task.done} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}