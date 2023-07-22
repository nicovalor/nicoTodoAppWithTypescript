import { Todo } from "../utils/types"
import { CreateTask } from "./CreateTask"

interface Props {
    onAddTodo: ({ title }: Pick<Todo, 'title'>)=>void
}

export const Header: React.FC<Props> = ( {onAddTodo} ) => {
    return (
        <header className="header">
            <h1>Tareas de la semana</h1>
            
            <CreateTask saveTask={onAddTodo} />
        </header>
    )
}