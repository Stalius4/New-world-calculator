import React from "react";
import { useState , useEffect} from "react";
import "./filter.css"

const Filter = ({consumableList, setFiltConsumableList, setCurrentPage, setIconToggle}) => {

const [filterBox, setFilterBox] = useState({main:false, rarity:false, tear:false})
const [rarityValue, setRarityValue] = useState([])


  useEffect (() => {
//if array is not empty 
  if(rarityValue[0] >= 0){
    //filter array with multiple values of array
    const result = consumableList.filter(item => rarityValue.includes(item.rarity))
    setFiltConsumableList(result);
    setCurrentPage(1)
      //remove icon from name  when other sort button pressed
      setIconToggle(0)
    }
    //if array is empty display full lists of consumable items
if(rarityValue[0] === undefined){
    setFiltConsumableList(consumableList)
    setIconToggle(0)
    setCurrentPage(1)
}
 
}, [rarityValue])

const rarityFilter = (e) => {
  if (e.target.checked) {
    setRarityValue((prev) => [...prev, Number(e.target.value)]);
  }
  if (!e.target.checked) {
  
    //remove value from array
    setRarityValue((prev) =>
      prev.filter(function (v) {
        return v !== Number(e.target.value);
      })
    );
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
  <input type="checkbox" value={0}  onClick={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>

</label>
<label className="container uncommon">Uncommon
  <input type="checkbox" value={1} onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container rare">Rare
  <input type="checkbox" value={2} onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container epic">Epic
  <input type="checkbox"  value={3} onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container legendary">Legendary
  <input type="checkbox"  value={4} onChange={(e)=>rarityFilter(e)}></input>
  <span className="checkmark"></span>
</label>
</div>: ""}

<div className="open-tear"> <div> Tear</div><i className={filterBox.tear  ?'fas fa-angle-up drop-icon' : 'fas fa-angle-down drop-icon '} ></i></div>
</div> : ""}


</>
    )
}

export default Filter

