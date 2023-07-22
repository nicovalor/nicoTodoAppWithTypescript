import { FILTER_BUTTONS } from "../utils/consts"
import { FilterValue } from "../utils/types"

interface Props {
    filterSelected: FilterValue,
    onFilterChange: (filter: FilterValue)=>void

}

export const Filters: React.FC<Props> = ({ filterSelected , onFilterChange}) => {



    return (
        <ul className="filters">
            {Object.entries(FILTER_BUTTONS).map(([key, {href, literal}]) => {
                return (
                    <li key={key}>
                        <a
                            href={href}
                            className={filterSelected === key ? "selected" : ""}
                            onClick={(event)=>{
                                event.preventDefault()
                                onFilterChange(key as FilterValue)
                                console.log(key)
                            }}
                        >{literal}</a>
                    </li>
                )
            })}

        </ul>
    )
}