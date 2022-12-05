import React from "react";
import { useEffect , useState} from "react";
import {LumberChart, TimberChart ,WyrdwoodPlank, IronwoodPlank, Greenwood, Agedwood, Wyrdwood, Ironwood} from "./chart";
import { createPriceList, listTimberPrice } from "./utilities";

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
const [timberList, setTimberList] = useState(initialValue)

const [displayTimberList, setDisplayTimberList] = useState([])

const handleChange = (e) => {
    const { name, value } = e.target;
    setTimberList({ ...timberList, [name]: value });
    console.log(timberList,"handlechange")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimberList(timberList);
    createPriceList(timberList.timber, timberList.lumber, timberList.wyrdWoodPlank,  timberList.ironWoodPlank, timberList.greenWood, timberList.agedWood, timberList.wyrdWood, timberList.ironWood, )
  };


useEffect(()=>{
listTimberPrice(setDisplayTimberList)








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
                      onChange={(e)=>handleChange(e)} value={timberList.ironWoodPlank} name="ironWoodPlank" />
            </label>

            <label> Wyrdwood Plank
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberList.wyrdWoodPlank} name="wyrdWoodPlank"/>
            </label>

            <label> Lumber
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberList.lumber} name="lumber"/>
            </label>

            <label> Timber
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberList.timber} name="timber"/>
            </label>

            <label> Greenwood
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberList.greenWood} name="greenWood"/>
            </label>

            <label> Agedwood
                <input type="number"   onChange={(e)=>handleChange(e)} value={timberList.agedWood} name="agedWood"/>
            </label>

            <label> Wyrdwood
                <input type="number"   onChange={(e)=>handleChange(e)}  value={timberList.wyrdWood}  name="wyrdWood" />
            </label>

            <label> IronWood
                <input type="number"   onChange={(e)=>handleChange(e)}  value={timberList.ironWood} name="ironWood"/>
            </label>


            <input className="submit-btn" type="submit" value="Submit"/>
      </form>

      {/* {displayTimberList.map((item, index)=> {

        return (
            <div>{item.timber_price}</div>
        )
      })} */}
<div className="chart timber"><h1 className="chart-titles">Timber</h1>
      <TimberChart timberData={newArr}></TimberChart>
      </div>
      <div className="chart lumber"><h1 className="chart-titles">Lumber</h1>
      <LumberChart timberData={newArr}></LumberChart>
      </div>
      <div className="chart wyrdwood-plank"><h1 className="chart-titles">Wyrdwood Plank</h1>
      <WyrdwoodPlank timberData={newArr}></WyrdwoodPlank>
      </div>
      <div className="chart ironwood-plank"><h1 className="chart-titles">Ironwood Plank</h1>
      <IronwoodPlank timberData={newArr}></IronwoodPlank>
      </div>
      <div className="chart greenwood"><h1 className="chart-titles">Green Wood</h1>
      <Greenwood timberData={newArr}></Greenwood>
      </div>
      <div className="chart agedwood"><h1 className="chart-titles">Aged Wood</h1>
      <Agedwood timberData={newArr}></Agedwood>
      </div>
      <div className="chart wyrdwood"><h1 className="chart-titles">Wyrd Wood</h1>
      <Wyrdwood timberData={newArr}></Wyrdwood>
      </div>
      <div className="chart ironwood"><h1 className="chart-titles">Iron Wood</h1>
      <Ironwood timberData={newArr}></Ironwood>
      </div>
      </div>


    )

}

export default Woodworking