import React from "react";
import { useEffect , useState} from "react";
import { TimberChart } from "./components/chart";
import { createPriceList, listTimberPrice, latestTimberPrice } from "./utilities";

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
const [latestPrice, setLatestPrice]= useState([])




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
latestTimberPrice(setLatestPrice)
const findIndex = () => {
 let last= displayTimberList.at(-1)
 console.log(last)
}
findIndex()
console.log(latestPrice)



const refiningTimberPrice = () => {

   let timberPrice = 0;


}

}, [])

// find all date key values in array of objects and slice it
const newArr = displayTimberList.map((item) => {
    return {...item, date: item.date.slice(0,3)};
 })
    return(



    <div className="woodworking-grid">
        <form className="timber-list"  onSubmit={handleSubmit}>

            <label> Ironwood Plank
                <input type="number" 
                      onChange={(e)=>handleChange(e)} value={timberPriceInput.ironWoodPlank} name="ironWoodPlank" />
            </label>

            <label> Wyrdwood Plank
                <input type="number" onChange={(e)=>handleChange(e)} value={timberPriceInput.wyrdWoodPlank} name="wyrdWoodPlank"/>
            </label>

            <label> Lumber
                <input type="number" onChange={(e)=>handleChange(e)} value={timberPriceInput.lumber} name="lumber"/>
            </label>

            <label> Timber
                <input type="number" onChange={(e)=>handleChange(e)} value={timberPriceInput.timber} name="timber"/>
            </label>

            <label> Greenwood
                <input type="number" onChange={(e)=>handleChange(e)} value={timberPriceInput.greenWood} name="greenWood"/>
            </label>

            <label> Agedwood
                <input type="number" onChange={(e)=>handleChange(e)} value={timberPriceInput.agedWood} name="agedWood"/>
            </label>

            <label> Wyrdwood
                <input type="number" onChange={(e)=>handleChange(e)}  value={timberPriceInput.wyrdWood}  name="wyrdWood" />
            </label>

            <label> IronWood
                <input type="number" onChange={(e)=>handleChange(e)}  value={timberPriceInput.ironWood} name="ironWood"/>
            </label>
            <input className="submit-btn" type="submit" value="Submit"/>
      </form>

<h2 className="market-title">Timber market prices</h2>


<TimberChart  topDivClass={"timber"}  imageId={"timbert2"} name={"Timber"} timberData={newArr}  domain1={0.50} domain2={1.2} datakey={"timber_price"}  ></TimberChart>

<TimberChart  topDivClass={"lumber"}  imageId={"timbert3"} name={"Lumber"} timberData={newArr}  domain1={1} domain2={2} datakey={"lumber_price"}  ></TimberChart>

<TimberChart  topDivClass={"wyrdwood-plank"} imageId={"timbert4"} name={"Wyrd Wood Plank"} timberData={newArr}  domain1={6} domain2={11} datakey={"wyrdwoodplank_price"}  ></TimberChart>

<TimberChart  topDivClass={"ironwood-plank"} imageId={"timbert5"} name={"Iron Wood Plank"} timberData={newArr}  domain1={15} domain2={19} datakey={"ironwoodplank_price"}  ></TimberChart>

<TimberChart  topDivClass={"wyrdwood"} imageId={"woodt4"} name={"Wyrd Wood"} timberData={newArr}  domain1={1.15} domain2={1.8} datakey={"wyrdwood_price"}  ></TimberChart>

<TimberChart  topDivClass={"greenwood"} imageId={"woodt1"} name={"Green Wood"} timberData={newArr}  domain1={0} domain2={0.6} datakey={"greenwood_price"}  ></TimberChart>

<TimberChart  topDivClass={"agedwood"} imageId={"woodt2"} name={"Aged Wood"} timberData={newArr}  domain1={0.15} domain2={0.4} datakey={"agedwood_price"}  ></TimberChart>

<TimberChart  topDivClass={"ironwood"} imageId={"woodt5"} name={"Iron Wood"} timberData={newArr}  domain1={1} domain2={2} datakey={"ironwood_price"}  ></TimberChart>
 


<div className="timber-refining-box"> 
        <div className="refining-title-flex">
            <img className="refining-timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert2.png" } alt="sd"/>
            <h1 className="refining-title-timber">Timber</h1>
            <p className="qty">Qty. </p>
                <p className="market">Market </p>
                <p className="refining">Refine </p>
            </div>
           
        <div className="refining-info-grid">
            <img className="greenwood-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt1.png" } alt="sd"/>
            <p className="greenwood-title-info"> Green Wood</p>
            <div className="greenwood-qty">{timberPriceInput.greenWood * 4}</div>
            <div className="timber-total">Total:</div>
            <div className="timber-market-price">{timberPriceInput.timber}</div>
            <div className="timber-refining-price">{}</div>
        </div>


         
       </div>
<div className="lumber-refining-box">Lumber</div>
<div className="wyrdwood-refining-box">ds</div>
<div className="ironwood-refining-box">ds</div>




      </div>

    
    )

}

export default Woodworking