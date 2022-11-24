import React from "react";
import { useState } from "react";
import { AiOutlineSearch} from "react-icons/ai";
import { IoIosArrowDown } from 'react-icons/io';
import "./filter.css"

const Filter = () => {

const [activeFilter, setActiveFilter] = useState(false)

    return(<>

<div className="filter-box" onClick={()=> {setActiveFilter(!activeFilter)}}> Filter by:
<i className={activeFilter ?'fas fa-angle-up drop-icon' : 'fas fa-angle-down drop-icon'} ></i>

</div>
<div className="open-filter">dsad</div>

</>
    )
}

export default Filter

{/* <label for="Rarity"></label>

<select id="Rarity" onChange={(e)=>changeRarity(e) }>
<option value="0" >Common</option>
<option value="1">Uncommon</option>
<option value="2">Rare</option>
<option value="3">Epic</option>
<option value="4">Legendary</option>
</select> */}