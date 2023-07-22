import { type Todo as TodoType } from "../utils/types"

interface Props extends TodoType {
    onRemove: (id:string)=>void
}

export const Todo: React.FC<Props> = ({id, title, done, onRemove}) => {
    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={done}
                onChange={()=>{}}
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