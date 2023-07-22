import {type FilterValue } from "../utils/types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number,
    completedCount: number
    filterSelected: FilterValue,
    onFilterChange: (filter:FilterValue)=>void
    onClearComplete: ()=>void
}

export const Footer: React.FC<Props> = ( {activeCount, completedCount, filterSelected, onFilterChange}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{completedCount && activeCount}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={()=>onFilterChange(filterSelected)}
            />
            
        </footer>
    )
}