import React from "react";
import { useEffect , useState} from "react";
import {LumberChart, TimberChart ,WyrdwoodPlank, IronwoodPlank, Greenwood, Agedwood, Wyrdwood, Ironwood} from "./chart";
import { createPriceList, listTimberPrice, timberIcons } from "./utilities";

import "./woodworking.css";


const Woodworking = () => {
    const initialValue = {
        timber: "",
        lumber: "",
        wyrdWoodPlank:"",
        ironWoodPlank:"",
        greenWood:"",
        agedWood:"",
        wyrdWood:"",
        ironWood:"",
    }
// store and send all timber prices to database
const [timberPriceInput, setTimberPriceInput] = useState(initialValue)
//get all timber prices from db and display ir on charts
const [displayTimberList, setDisplayTimberList] = useState([])
//get all timber icons from db
const [timberIcon, setTimberIcon] = useState([])



const handleChange = (e) => {
    const { name, value } = e.target;
    setTimberPriceInput({ ...timberPriceInput, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimberPriceInput(timberPriceInput);
    createPriceList(timberPriceInput.timber, timberPriceInput.lumber, timberPriceInput.wyrdWoodPlank,  timberPriceInput.ironWoodPlank, timberPriceInput.greenWood, timberPriceInput.agedWood, timberPriceInput.wyrdWood, timberPriceInput.ironWood, )
  };


useEffect(()=>{
listTimberPrice(setDisplayTimberList)
timberIcons(setTimberIcon)
const findIndex = () => {
   return  displayTimberList.at(-1)
}
findIndex() 





}, [])

// find all date key values in array of objects and slice it
const newArr = displayTimberList.map((item) => {
    return {...item, date: item.date.slice(0,10)};
 })
    return(



    <div className="woodworking-grid">
        <form className="timber-list"  onSubmit={handleSubmit}>
            <label> Ironwood Plank
                <input type="number" 
                    oninput="this.value=this.value.slice(0,this.maxLength)"
                      onChange={(e)=>handleChange(e)} value={timberPriceInput.ironWoodPlank} name="ironWoodPlank" />
            </label>

            <label> Wyrdwood Plank
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberPriceInput.wyrdWoodPlank} name="wyrdWoodPlank"/>
            </label>

            <label> Lumber
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberPriceInput.lumber} name="lumber"/>
            </label>

            <label> Timber
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberPriceInput.timber} name="timber"/>
            </label>

            <label> Greenwood
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberPriceInput.greenWood} name="greenWood"/>
            </label>

            <label> Agedwood
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberPriceInput.agedWood} name="agedWood"/>
            </label>

            <label> Wyrdwood
                <input type="number"   onChange={(e)=>handleChange(e)}  value={timberPriceInput.wyrdWood}  name="wyrdWood" />
            </label>

            <label> IronWood
                <input type="number"   onChange={(e)=>handleChange(e)}  value={timberPriceInput.ironWood} name="ironWood"/>
            </label>


            <input className="submit-btn" type="submit" value="Submit"/>
      </form>


<div className="chart timber">
<div className="display-flex-wood">
            <img className="timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert2.png" } alt="sd"/>
            <h1 className="chart-titles">Timber</h1>
        </div>
      <TimberChart timberData={newArr}></TimberChart>
</div>
      <div className="chart lumber">
      <div className="display-flex-wood">
            <img className="timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert3.png" } alt="sd"/>
            <h1 className="chart-titles">Lumber</h1>
        </div>
      <LumberChart timberData={newArr}></LumberChart>
      </div>





    <div className="chart ironwood-plank">
        <div className="display-flex-wood">
            <img className="timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert5.png" } alt="sd"/>
            <h1 className="chart-titles">Ironwood Plank</h1>
        </div>
        <IronwoodPlank timberData={newArr}></IronwoodPlank>
    </div>

    <div className="chart wyrdwood-plank">
    <div className="display-flex-wood">
            <img className="timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert4.png" } alt="sd"/>
            <h1 className="chart-titles">Wyrdwood Plank</h1>
        </div>
      <WyrdwoodPlank timberData={newArr}></WyrdwoodPlank>
      </div>


    <div className="chart wyrdwood">
    <div className="display-flex-wood">
            <img className="timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt4.png" } alt="sd"/>
            <h1 className="chart-titles">Wyrd Wood</h1>
        </div>
      <Wyrdwood timberData={newArr}></Wyrdwood>
      </div>

      <div className="chart greenwood">
        <div className="display-flex-wood">
            <img className="timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt1.png" } alt="sd"/>
            <h1 className="chart-titles">Green Wood</h1>
        </div>
         <Greenwood timberData={newArr}></Greenwood>
      </div>

      <div className="chart agedwood">
        <div className="display-flex-wood">
            <img className="timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt2.png" } alt="sd"/>
            <h1 className="chart-titles">Aged Wood</h1>
        </div>
        <Agedwood timberData={newArr}></Agedwood>
      </div>

      <div className="chart ironwood">
      <div className="display-flex-wood">
            <img className="timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt5.png" } alt="sd"/>
            <h1 className="chart-titles">Iron Wood</h1>
        </div>
      <Ironwood timberData={newArr}></Ironwood>
      </div>
      </div>

    
    )

}

export default Woodworking