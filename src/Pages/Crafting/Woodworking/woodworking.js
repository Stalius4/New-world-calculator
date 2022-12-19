import React from "react";
import { useEffect , useState} from "react";
import { TimberChart } from "./components/chart";
import { createPriceList, listTimberPrice, latestTimberPrice } from "./utilities";
import "./woodworking.css";
import { round } from 'mathjs';
import CraftingGear from "../components/craftingGear";




 
const Woodworking = ({setLoading}) => {
    const initialValue = {
        timber: "",
        lumber: "",
        wyrdWoodPlank:"",
        ironWoodPlank:"",
        greenWood:"",
        agedWood:"",
        wyrdWood:"",
        ironWood:"",
        sandpaper:"",
    }
// store and send all timber prices to database
const [timberPriceInput, setTimberPriceInput] = useState(initialValue)
//get all timber prices from db and display ir on charts
const [displayTimberList, setDisplayTimberList] = useState([])
//get all timber icons from db
const [latestPrice, setLatestPrice]= useState(initialValue)

const [refinedPrices, setRefinedgPrices] = useState(initialValue)

const [refiningPercantage, setRefiningPercentage] = useState(0)





const handleChange = (e) => {
    const { name, value } = e.target;
    setTimberPriceInput({ ...timberPriceInput, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimberPriceInput(timberPriceInput);
    createPriceList(timberPriceInput.timber, timberPriceInput.lumber, timberPriceInput.wyrdWoodPlank,  timberPriceInput.ironWoodPlank, timberPriceInput.greenWood, timberPriceInput.agedWood, timberPriceInput.wyrdWood, timberPriceInput.ironWood,timberPriceInput.sandpaper )
  };


  const refinedTimber =  () => {
    //timber calculation
    const refiningCostTimber =0.01
    const timber =  latestPrice.greenWood*4+refiningCostTimber

    const timberPrice100 = timber *100 
    const refinedTimberPrice = round(timberPrice100 / (120 + refiningPercantage), 2)

   //lumber calculation 
    const refiningCostLumber =0.01
    const refinedLumberPrice = (latestPrice.agedWood * 4) + latestPrice.sandpaper + (refinedTimberPrice *2)+refiningCostLumber
    const  refLumber100= refinedLumberPrice *100
    const  refLumberPriceWithBonus = round(refLumber100 / (193 +  refiningPercantage), 2)
 
    //wyrdwood plank calculation 
    const refiningCostWyrdwood =0.02
    const refinedWyrdwoodPrice = (latestPrice.wyrdWood * 6) + latestPrice.sandpaper + (refLumberPriceWithBonus *2)+refiningCostWyrdwood
    const  refWyrdwood100= refinedWyrdwoodPrice *100
    const  refWyrdwoodPriceWithBonus = round(refWyrdwood100 / (140 +  refiningPercantage), 2)

    //ironwood plank calculation 
    const refiningCostIronwood =0.04
    const refinedIronwoodPrice = (latestPrice.ironWood * 8) + latestPrice.sandpaper + (refWyrdwoodPriceWithBonus *2) +  refiningCostIronwood 
    const  refIronwood100= refinedIronwoodPrice *100
    const  refIronwoodPriceWithBonus = round(refIronwood100 / (113 +  refiningPercantage), 2)

    setRefinedgPrices({...refinedPrices, 
        timber:refinedTimberPrice, 
        lumber:refLumberPriceWithBonus, 
        wyrdWoodPlank:refWyrdwoodPriceWithBonus,
        ironWoodPlank:refIronwoodPriceWithBonus})

}
 
useEffect(()=>{
listTimberPrice(setDisplayTimberList)
latestTimberPrice(setLatestPrice, latestPrice, setLoading )

// eslint-disable-next-line
}, [])


useEffect(()=>{
    refinedTimber()
// eslint-disable-next-line
    }, [latestPrice, refiningPercantage])

// find all date key values in array of objects and slice it
const newArr = displayTimberList.map((item) => {
    return {...item, date: item.date.slice(0,3)};
 })
    return(



    <div className="woodworking-grid">
        <form className="timber-list"  onSubmit={handleSubmit}>

            <label> Ironwood Plank
                <input type="number" placeholder={latestPrice.ironWoodPlank}
                      onChange={(e)=>handleChange(e)} value={timberPriceInput.ironWoodPlank} name="ironWoodPlank" />
            </label>

            <label> Wyrdwood Plank
                <input type="number"placeholder={latestPrice.wyrdWoodPlank} onChange={(e)=>handleChange(e)} value={timberPriceInput.wyrdWoodPlank} name="wyrdWoodPlank"/>
            </label>

            <label> Lumber
                <input type="number" placeholder={latestPrice.lumber} onChange={(e)=>handleChange(e)} value={timberPriceInput.lumber} name="lumber"/>
            </label>

            <label> Timber
                <input type="number"  placeholder={latestPrice.timber}  onChange={(e)=>handleChange(e)} value={timberPriceInput.timber} name="timber"/>
            </label>

            <label> Greenwood
                <input type="number" placeholder={latestPrice.greenWood} onChange={(e)=>handleChange(e)} value={timberPriceInput.greenWood} name="greenWood"/>
            </label>

            <label> Agedwood
                <input type="number" placeholder={latestPrice.agedWood} onChange={(e)=>handleChange(e)} value={timberPriceInput.agedWood} name="agedWood"/>
            </label>

            <label> Wyrdwood
                <input type="number" placeholder={latestPrice.wyrdWood} onChange={(e)=>handleChange(e)}  value={timberPriceInput.wyrdWood}  name="wyrdWood" />
            </label>

            <label> IronWood
                <input type="number" placeholder={latestPrice.ironWood} onChange={(e)=>handleChange(e)}  value={timberPriceInput.ironWood} name="ironWood"/>
            </label>
            <label> Sandpaper
                <input type="number" placeholder={latestPrice.sandpaper} onChange={(e)=>handleChange(e)}  value={timberPriceInput.sandpaper} name="sandpaper"/>
            </label>

            <input className="submit-btn" type="submit" value="Submit"/>
      </form>

<CraftingGear refiningPercantage={refiningPercantage} setRefiningPercentage= {setRefiningPercentage}></CraftingGear>


<TimberChart  topDivClass={"timber"}  imageId={"timbert2"} name={"Timber"} timberData={newArr}  domain1={0.50} domain2={1.2} datakey={"timber_price"}  ></TimberChart>

<TimberChart  topDivClass={"lumber"}  imageId={"timbert3"} name={"Lumber"} timberData={newArr}  domain1={1} domain2={2} datakey={"lumber_price"}  ></TimberChart>

<TimberChart  topDivClass={"wyrdwood-plank"} imageId={"timbert4"} name={"Wyrd Wood Plank"} timberData={newArr}  domain1={6} domain2={11} datakey={"wyrdwoodplank_price"}  ></TimberChart>

<TimberChart  topDivClass={"ironwood-plank"} imageId={"timbert5"} name={"Iron Wood Plank"} timberData={newArr}  domain1={15} domain2={19} datakey={"ironwoodplank_price"}  ></TimberChart>

<TimberChart  topDivClass={"wyrdwood"} imageId={"woodt4"} name={"Wyrd Wood"} timberData={newArr}  domain1={1.15} domain2={1.8} datakey={"wyrdwood_price"}  ></TimberChart>

<TimberChart  topDivClass={"greenwood"} imageId={"woodt1"} name={"Green Wood"} timberData={newArr}  domain1={0} domain2={0.6} datakey={"greenwood_price"}  ></TimberChart>

<TimberChart  topDivClass={"agedwood"} imageId={"woodt2"} name={"Aged Wood"} timberData={newArr}  domain1={0.15} domain2={0.4} datakey={"agedwood_price"}  ></TimberChart>

<TimberChart  topDivClass={"ironwood"} imageId={"woodt5"} name={"Iron Wood"} timberData={newArr}  domain1={1} domain2={2} datakey={"ironwood_price"}  ></TimberChart>
<h2 className="market-title">Timber market prices</h2>


           {/* timber box */}
<div className="refining-box r-timber"> 
        <div className="refining-title-flex">
            <img className="refining-timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert2.png" } alt="sd"/>
            <h1 className="refining-title-timber">Timber</h1>
            <p className="qty">Qty. </p>
                <p className="market">Market </p>
                <p className="refining">Refine</p>
            </div>
        <div className="refining-info-timber">
            <img className="greenwood-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt1.png" } alt="sd"/>
            <p className="greenwood-title-info"> Green Wood</p>
            <div className="greenwood-qty">4</div>
            <div className="timber-total">Total:</div>
            {/*  1 timber market price */}
            <div className="timber-market-price">{round(latestPrice.timber, 2)}</div>
            {/* refined timber price  */}
            <div className="timber-refining-price">{refinedPrices.timber}</div>
        </div>
</div>

            {/* lumber box */}
<div className="refining-box r-lumber">
<div className="refining-title-flex">
            <img className="refining-timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert3.png" } alt="sd"/>
            <h1 className="refining-title-timber">Lumber</h1>
            <p className="qty">Qty.</p>
                <p className="market">Market</p>
                <p className="refining">Refine</p>
            </div>
        <div className="refining-info-lumber">
        <img className="agedwood-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt2.png" } alt="sd"/>
            <p className="agedwood-title-info">Aged Wood</p>
            <div className="agedwood-qty">4</div>
            {/* 4 aged wood price */}
            <div className="agedwood-total-price">{latestPrice.agedWood * 4}</div>
            <img className="greenwood-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert2.png" } alt="sd"/>
            <p className="greenwood-title-info"> Timber</p>
            <div className="greenwood-qty">2</div>
            {/* 2 timber market price */}
            <div className="lumber-market-price">{latestPrice.timber * 2}</div>
                 {/* 2 timber refined price */}
            <div className="timber2-refined-price">{refinedPrices.timber *2 }</div>
            <img className="sandpaper-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/sandpapert5.png" } alt="sd"/>
            <p className="sandpaper-title-info"> Sandpaper</p>
            <div className="sandpaper-qty">1</div>
            <div className="sandpaper-market-price">{latestPrice.sandpaper}</div>
            <div className="timber-total">Total:</div>
            <div className="timber-market-price">{round(latestPrice.timber*2 +latestPrice.sandpaper + latestPrice.agedWood * 4, 2)}</div>
            <div className="timber-refining-price">{refinedPrices.lumber}</div>
        </div>


</div>
<div className="refining-box r-wyrdwood-plank">
<div className="refining-title-flex">
            <img className="refining-timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert4.png" } alt="sd"/>
            <h1 className="refining-title-timber">Wyrdwood Plank</h1>
            <p className="qty">Qty. </p>
                <p className="market">Market </p>
                <p className="refining">Refine </p>
            </div>

        <div className="refining-info-lumber">
        <img className="agedwood-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt4.png" } alt="sd"/>
            <p className="agedwood-title-info">Wyrdwood</p>
            <div className="agedwood-qty">6</div>
            <div className="agedwood-total-price">{round(latestPrice.wyrdWood * 6, 2)}</div>
            <img className="greenwood-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert3.png" } alt="sd"/>
            <p className="greenwood-title-info"> Lumber</p>
            <div className="greenwood-qty">2</div>
            {/* lumber market price */}
            <div className="lumber-market-price">{latestPrice.lumber * 2}</div>
            {/* 2 refined lumbers */}
            <div className="timber2-refined-price">{refinedPrices.lumber *2 }</div>
            <img className="sandpaper-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/sandpapert5.png" } alt="sd"/>
            <p className="sandpaper-title-info"> Sandpaper</p>
            <div className="sandpaper-qty">1</div>
            <div className="sandpaper-market-price">{latestPrice.sandpaper}</div>
            <div className="timber-total">Total:</div>
            {/* wyrdwood market price */}
            <div className="timber-market-price">{round(latestPrice.wyrdWood*6 +latestPrice.sandpaper + latestPrice.lumber * 2, 2) }</div>
            {/* refined wyrdwod price */}
            <div className="timber-refining-price">{refinedPrices.wyrdWoodPlank}</div>
</div>


</div>
<div className="refining-box r-ironwood-plank">
<div className="refining-title-flex">
            <img className="refining-timber-image"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert5.png" } alt="sd"/>
            <h1 className="refining-title-timber">Ironwood Plank</h1>
            <p className="qty">Qty. </p>
                <p className="market">Market </p>
                <p className="refining">Refine </p>
            </div>

        <div className="refining-info-lumber">
        <img className="agedwood-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/woodt5.png" } alt="sd"/>
            <p className="agedwood-title-info">Ironwood</p>
            <div className="agedwood-qty">8</div>
            <div className="agedwood-total-price">{latestPrice.ironWood * 8}</div>
            <img className="greenwood-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/timbert4.png" } alt="sd"/>
            <p className="greenwood-title-info"> Wyrdwood plank</p>
            <div className="greenwood-qty">2</div>
            <div className="lumber-market-price">{latestPrice.wyrdWoodPlank * 2}</div>
            <div className="timber2-refined-price">{refinedPrices.wyrdWoodPlank * 2}</div>
            <img className="sandpaper-img"src={"https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/sandpapert5.png" } alt="sd"/>
            <p className="sandpaper-title-info"> Sandpaper</p>
            <div className="sandpaper-qty">1</div>
            <div className="sandpaper-market-price">{latestPrice.sandpaper}</div>
            <div className="timber-total">Total:</div>
            <div className="timber-market-price">{round(latestPrice.ironWood * 8 +latestPrice.sandpaper + latestPrice.wyrdWoodPlank * 2, 2) }</div>
            <div className="timber-refining-price">{refinedPrices.ironWoodPlank}</div>

</div></div>





      </div>

    
    )

}

export default Woodworking