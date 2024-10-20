import { GoPlus } from "react-icons/go";
import './index.css'

const FilterList=(props)=>{
    const {eachOption}=props
    console.log(eachOption)
    return(
        <div >
            <div className="filter-cont">
                <p>{eachOption.text}</p>
                <GoPlus />
            </div>
            <hr/>
        </div>
    )
}

export default FilterList