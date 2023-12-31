import { type Todo as TodoType } from "../utils/types"

interface Props extends TodoType {
    onRemove: (id:string)=>void,
    onCompleted: (id:string, done:boolean)=>void
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemove, onCompleted}) => {

    const handleChangleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onCompleted(id, completed = event.target.checked)
    }
    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={handleChangleCheckbox}
            />
            <label>
                {title}
            </label>
            <button 
                className="destroy"
                onClick={()=>{onRemove(id)}}
            />
        </div>
    )
}