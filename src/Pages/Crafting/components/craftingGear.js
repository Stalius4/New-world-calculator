import React, {useState} from "react";
import "./craftingGear.css"


const CraftingGear = ({refiningPercantage, setRefiningPercentage}) => {

    const [gear , setGear] = useState ({
        head: false,
        chest:false,
        legs:false,
        hands:false,
        boots:false
    })
const gearStats = (item) => {
if(item === "head"){   
    setGear(prev  =>({...prev, head: !prev.head}) )
    if(!gear.head){
        setRefiningPercentage( refiningPercantage +2)
    }
    if(gear.head){
        setRefiningPercentage( refiningPercantage -2)
    }
}

if(item === "chest"){
    setGear(prev  =>({...prev, chest: !prev.chest}) )
    if(!gear.chest){
        setRefiningPercentage( refiningPercantage +2)
    }
    if(gear.chest){
        setRefiningPercentage( refiningPercantage -2)
    }
}
if(item === "legs"){
    setGear(prev  =>({...prev, legs: !prev.legs}) )
    if(!gear.legs){
        setRefiningPercentage( refiningPercantage +2)
    }
    if(gear.legs){
        setRefiningPercentage( refiningPercantage -2)
    }

}
 if(item === "hands"){
     setGear(prev  =>({...prev, hands: !prev.hands}) )
     if(!gear.hands){
        setRefiningPercentage( refiningPercantage +2)
    }
    if(gear.hands){
        setRefiningPercentage( refiningPercantage -2)
    }


 }
 if(item === "boots"){
     setGear(prev  =>({...prev, boots: !prev.boots}) )
     if(!gear.boots){
        setRefiningPercentage( refiningPercantage +2)
    }
    if(gear.boots){
        setRefiningPercentage( refiningPercantage -2)
    }


 }
}

    return(
        <div className=" crafting-gear-outer-box">
            {/* <h1>{`${refiningPercantage}% bonus applied`}</h1> */}
           <div> <img onClick={() =>gearStats("head")} className={gear.head ?"selected-gear" : "unselected-gear"} src="https://cdn.nwdb.info/db/images/live/v19/icons/items/armor/m_leatherworkervar2_head.png" alt="Head"  /></div>
           <div > <img onClick={() =>gearStats("chest")} className={gear.chest ?"selected-gear" : "unselected-gear"} src="https://cdn.nwdb.info/db/images/live/v19/icons/items/armor/m_leatherworkervar2_chest.png" alt="Chest"  /></div>
           <div> <img  onClick={() =>gearStats("legs")} className={gear.legs ?"selected-gear" : "unselected-gear"} src="https://cdn.nwdb.info/db/images/live/v19/icons/items/armor/m_leatherworkervar2_legs.png" alt="Legs"  /></div>
           <div><img onClick={() =>gearStats("hands")} className={gear.hands ?"selected-gear" : "unselected-gear"} src="https://cdn.nwdb.info/db/images/live/v19/icons/items/armor/m_leatherworkervar2_hands.png" alt="Legs"  /></div>
           <div> <img  onClick={() =>gearStats("boots")}className={gear.boots ?"selected-gear" : "unselected-gear"} src="https://cdn.nwdb.info/db/images/live/v19/icons/items/armor/m_leatherworkervar2_feet.png" alt="Legs"  /></div>
         
        </div>
    )
}

export default CraftingGear