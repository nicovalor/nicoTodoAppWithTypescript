import { type ListOfTodos } from "../utils/types"

interface Props {
    todos: ListOfTodos
}

export const Todos: React.FC<Props> = ( { todos } )=>{
    return (
        <>
            <ul>
                {todos.map(  task  => {
                    return (
                        <li key={task.id}>
                            {task.title}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}