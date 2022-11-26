import React from "react";
import { useState , useEffect} from "react";
import "./filter.css"

const Filter = ({consumableList, setFiltConsumableList, setCurrentPage, setIconToggle}) => {

const [filterBox, setFilterBox] = useState({main:false, rarity:false, tier:false})
const [rarityValue, setRarityValue] = useState([])
const [tierValue, setTierValue] = useState([])

  useEffect(() => {
    //with rarity and tier options
    if (rarityValue[0] >= 0 && tierValue[0] >= 0) {
      //filter array with multiple values of array
      const result = consumableList.filter((item) =>tierValue.includes(item.tier) && rarityValue.includes(item.rarity));
      setFiltConsumableList(result);
      setCurrentPage(1);
      //remove icon from name  when other sort button pressed
      setIconToggle(0);
    }


    //with rarity option
    if (rarityValue[0] >= 0 && tierValue[0] === undefined) {
      //filter array with multiple values of array
      const result = consumableList.filter((item) =>
        rarityValue.includes(item.rarity)
      );
      setFiltConsumableList(result);
      setCurrentPage(1);
      //remove icon from name  when other sort button pressed
      setIconToggle(0);
    }


    //with tier option
    if (tierValue[0] >= 0 && rarityValue[0] === undefined) {
      //filter array with multiple values of array
      const result = consumableList.filter((item) =>
        tierValue.includes(item.tier)
      );
      setFiltConsumableList(result);
      setCurrentPage(1);
      //remove icon from name  when other sort button pressed
      setIconToggle(0);
    }
    //if array is empty display full lists of consumable items
    if (rarityValue[0] === undefined && tierValue[0] === undefined) {
      setFiltConsumableList(consumableList);
      setIconToggle(0);
      setCurrentPage(1);
    }
  }, [rarityValue, tierValue]);



  
const rarityFilter = (e) => {
  if (e.target.checked) {
    setRarityValue((prev) => [...prev, Number(e.target.value)]);
  }

  if (!e.target.checked) {
    //remove value from array
    setRarityValue((prev) =>prev.filter(function (v) {
        return v !== Number(e.target.value);
      })
    );
  }
};

const tierFilter = (e) => {
    if (e.target.checked) {
      setTierValue((prev) => [...prev, Number(e.target.value)]);
    }
  
    if (!e.target.checked) {
      //remove value from array
      setTierValue((prev) =>prev.filter(function (v) {
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

<div className="open-tear" onClick={()=> {  setFilterBox(prevState => ({...prevState, tear: !prevState.tear}))}}> <div> Tear</div><i className={filterBox.tear  ?'fas fa-angle-up drop-icon' : 'fas fa-angle-down drop-icon '} ></i></div>{filterBox.tear ? <div className="open-rarity-options" >
<label className="container ">I
  <input type="checkbox" value={1}  onClick={(e)=>tierFilter(e)}></input>
  <span className="checkmark"></span>

</label>
<label className="container ">II
  <input type="checkbox" value={2} onChange={(e)=>tierFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container ">III
  <input type="checkbox" value={3} onChange={(e)=>tierFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container">IV
  <input type="checkbox"  value={4} onChange={(e)=>tierFilter(e)}></input>
  <span className="checkmark"></span>
</label>
<label className="container ">V
  <input type="checkbox"  value={5} onChange={(e)=>tierFilter(e)}></input>
  <span className="checkmark"></span>
</label>
</div>: ""}
</div> : ""}


</>
    )
}

export default Filter

