import { type Todo as TodoType } from "../utils/types"

type Props = TodoType

export const Todo: React.FC<Props> = ({id, title, done}) => {
    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={done}
                onChange={()=>{}}
            />
            <label>
                {id && title}
            </label>
            <button 
                className="destroy"
                onClick={()=>{}}
            />
        </div>
    )
}