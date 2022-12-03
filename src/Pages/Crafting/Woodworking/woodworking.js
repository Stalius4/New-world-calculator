import React from "react";
import { useEffect , useState} from "react";
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
        ironWood:""
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
    createPriceList(timberList.timber, timberList.lumber, timberList.wyrdWoodPlank,  timberList.ironWoodPlank, timberList.greenWood, timberList.agedWood, timberList.wyrdWood, timberList.ironWood)
  };

useEffect(()=>{
listTimberPrice(setDisplayTimberList)

}, [])

    return(



        <div >
             <form className="timber-list"  onSubmit={handleSubmit}>
        <label >
          Timber
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
            value={timberList.timber}
            name="timber"
          />
        </label>
        <label >
          Lumber
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
            value={timberList.lumber}
            name="lumber"
          />
        </label>
        <label >
        Wyrdwood Plank
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
            value={timberList.wyrdWoodPlank}
            name="wyrdWoodPlank"
          />
        </label>
        <label >
        Ironwood Plank
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
            value={timberList.ironWoodPlank}
            name="ironWoodPlank"
          />
        </label>
        <label >
        greenWood
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
            value={timberList.greenWood}
            name="greenWood"
          />
        </label>
        <label >
        agedWood
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
            value={timberList.agedWood}
            name="agedWood"
          />
        </label>
        <label >
        wyrdWood
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
            value={timberList.wyrdWood}
            name="wyrdWood"
          />
        </label>
        <label >
        ironWood
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
            value={timberList.ironWood}
            name="ironWood"
          />
        </label>
        <input
         
          type="submit"
          value="Submit"
        />
      </form>
      
      
      
      </div>


    )

}

export default Woodworking