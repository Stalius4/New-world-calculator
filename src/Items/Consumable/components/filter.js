import React from "react";
import { useState , useEffect} from "react";
import {AiOutlineCheckSquare, AiOutlineBorder } from "react-icons/ai";
import { IoIosArrowDown, IoMdCheckbox } from 'react-icons/io';
import "./filter.css"

const Filter = ({consumableList, setFiltConsumableList, setCurrentPage, setIconToggle}) => {

const [filterBox, setFilterBox] = useState({main:false, rarity:false, tear:false})

const [checkedValue, setCheckedValue] = useState([])

const [v, setv] = useState ({common:false, uncommon:false
})
const rarityFilter = (e) => {



    
    if (e.target.checked){
        setv(prev)
        setCheckedValue(prev =>  [...prev, e.target.value] )
        console.log(checkedValue, "chackeevalue" ,e.target.value, "value")

        const result = consumableList.filter(
            // eslint-disable-next-line
        ({ rarity } ) => rarity == e.target.value )
        setFiltConsumableList(result);
        setCurrentPage(1)
          //remove icon from name other sort button pressed
          setIconToggle(0)
  

    }
    if (!e.target.checked){
        console.log(checkedValue, "chackeevalue" ,e.target.value, "value")
        //remove value from array
        setCheckedValue(prev =>  prev.filter(function(v){
            return v !== e.target.value
        }) )


        console.log(checkedValue)
        const result = consumableList.filter(
            // eslint-disable-next-line
        ({ rarity }) => rarity == "")
        setFiltConsumableList(consumableList);
        setCurrentPage(1)
          //remove icon from name other sort button pressed
          setIconToggle(0)
    }
    


  };



    return(
    <>
<div className="filter-box"
 onClick={()=> {  setFilterBox(prevState => ({...prevState, main: !prevState.main}))}}> 
 Filter by:
<i className={filterBox.main ?'fas fa-angle-up drop-icon' : 'fas fa-angle-down drop-icon'} ></i>

</div> {filterBox.main  ? <div className="open-filter">
<div className="open-rarity" onClick={()=> {  setFilterBox(prevState => ({...prevState, rarity: !prevState.rarity}))}}> <div > Rarity</div> 
<i className={filterBox.rarity  ?'fas fa-angle-up drop-icon' : 'fas fa-angle-down drop-icon'} ></i> </div>
{filterBox.rarity ? <div className="open-rarity-options">
<label className="container common">Common
  <input type="checkbox" value="0" onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>

</label>
<label className="container uncommon">Uncommon
  <input type="checkbox" value="1" onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container rare">Rare
  <input type="checkbox" value="2" onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container epic">Epic
  <input type="checkbox"  value="3" onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container legendary">Legendary
  <input type="checkbox"  value="4" onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>
</label>
</div>: ""}

<div className="open-tear"> <div> Tear</div><i className={filterBox.tear  ?'fas fa-angle-up drop-icon' : 'fas fa-angle-down drop-icon '} ></i></div>
</div> : ""}


</>
    )
}

export default Filter


// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// <label for="vehicle1"> I have a bike</label><br></br>
{/* <label for="Rarity"></label>

<select id="Rarity" onChange={(e)=>changeRarity(e) }>
<option value="0" >Common</option>
<option value="1">Uncommon</option>
<option value="2">Rare</option>
<option value="3">Epic</option>
<option value="4">Legendary</option>
</select> */}