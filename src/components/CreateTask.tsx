import { Todo } from "../utils/types";
import { useState } from 'react'

interface Props {
    saveTask: ({ title }: Pick<Todo, 'title'>)=>void;
}

export const CreateTask:React.FC<Props> = ({saveTask}) => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        saveTask( {title: inputValue} );
        setInputValue("");
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="new-todo" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="¿Qué tarea quieres hacer?"
            autoFocus
            />
        </form>
    )
}