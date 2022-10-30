import React, { useEffect, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import "./consumable.css"

const Consumable= ({consumableList, setConsumableList})=>{

const [sortedArr, setSortedArr] = useState([])
// const [updated, setUpdated] = useState(false)

    useEffect(() => {
          const fetchData = async () => {
              try {
          
                  const offsetArr = [1, 2];
                  const itemArr = [];
          offsetArr.forEach(async(item,index) =>{
      
      
        
                const response = await fetch(`https://nwdb.info/db/items/consumables/raw-food/page/${item}.json`);
                const data = await response.json();
                data.data.forEach(async(item, index) => {
      
                  const eventObj = {
                      id: item.id,
                      tier: item.tier,
                     name: item.name,
                     icon: item.icon,
                     itemClass: item.itemClass,
                      description: item.description,  
                      rarity: item.rarity
                  };
      
                  itemArr.push(eventObj)})
                  setConsumableList(itemArr);
                
                if (!response.ok) {
                  throw new Error(response.statusText);
                }
      
      
        //   console.log(itemArr,"daa")
              
              //   console.log(consumableList, "pirmas");
              })
              } catch (error) {}
            };
       
        fetchData()
        // eslint-disable-next-line
      }, []);




      
      const sortTearUp = () =>{
        console.log(consumableList, "pirmas")
        const newSortedArr = [...consumableList].sort((a, b) =>{ 
            return a.tier - b.tier
          })
            setConsumableList  ( newSortedArr )
      }

      const sortTearDown = () =>{
        const newSortedArr = [...consumableList].sort((a, b) =>{ 
            return b.tier - a.tier})
setConsumableList  ( newSortedArr )
      
      }
      const sortGearUp = () =>{
        console.log(consumableList, "pirmas")
        const newSortedArr = [...consumableList].sort((a, b) =>{ 
            return a.rarity - b.rarity
          })
            setConsumableList  ( newSortedArr )
      }

      const sortGearDown = () =>{
        console.log(consumableList, "pirmas")
        const newSortedArr = [...consumableList].sort((a, b) =>{ 
            return b.rarity - a.rarity
          })
            setConsumableList  ( newSortedArr )
      }
      return (
        <div className="main-box">
          <div className="top-sort-part">
            <div className="item-title-name">Name</div>
            <div className="item-title-rarity">Rarity
            <AiFillCaretUp color="orange" onClick={ sortGearUp  }>fds</AiFillCaretUp>
            <AiFillCaretDown color="orange" onClick={ sortGearDown  }></AiFillCaretDown>
            </div>
            <div className="item-title-tear">Tear
            <AiFillCaretUp color="orange" onClick={ sortTearUp  }>fds</AiFillCaretUp>
            <AiFillCaretDown color="orange" onClick={ sortTearDown  }></AiFillCaretDown>
            </div>
          
            </div>
       {consumableList.map((item, index) => {
       
        return (
          <div key={index} className={index % 2 === 0 ?"item-box": "item-box-white"}>

            <img className={item.rarity === 0 ? "item-image-rarity-0":
           item.rarity === 1 ? "item-image-rarity-1": 
           item.rarity === 2 ? "item-image-rarity-2": 
           item.rarity === 4 ? "item-image-rarity-4": 
           "item-image-rarity-0"}
              src={`https://cdn.nwdb.info/db/images/live/v17/icons/items/consumable/${
                item.id ==="juniperberryt5" ? "blueberryt1":
                item.id ==="meatsquidt1" ? "squidmeatt1":
                item.id ==="redmeatt1" ? "meatt1":
                item.id ==="fisht2" ? "fisht1":
                item.id ==="fisht3" ? "fisht1":
                item.id ==="fisht4" ? "fisht1":
                item.id ==="enrichedredmeatt5" ? "highnutritionmeatst5":
                item.id === "enrichedmeatportiont5" ? "highnutritionmeatst3":
                item.id === "armadillomeatt5" ? "armadillomeat":
                item.id === "scorpionmeatt5" ?"scorpionmeat"
                :item.id }.png` }
              alt="sd"
              onError={e => { 
                    e.target.src ="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/image-not-found-icon.png";
     }}/>
                 {/* <div>{item.id}</div> */}
          <div className="item-name">{item.name}</div>
          <div className={item.rarity === 0 ?"item-rarity":
            item.rarity === 1 ?"item-rarity-uncommon":
            item.rarity === 2 ?"item-rarity-rare":
            item.rarity === 3 ?"item-rarity-epic":
            item.rarity === 4 ?"item-rarity-legendary":
          
          
          "item-rarity"}>
            {item.rarity === 0 ? "Common" : item.rarity === 1 ? "Uncommon" : item.rarity === 2 ? "Rare" : item.rarity === 3 ? "Epic" : item.rarity === 4 ? "Legendary" : item.rarity}</div>
          <div className="item-tier" >{item.tier === 0 ? "0":item.tier === 1 ? "I":item.tier === 2 ? "II":item.tier === 3 ? "III":item.tier === 4 ? "IV":item.tier === 5 ? "V": item.tear}</div> 
          </div>
        );
      })
     } </div>)
}

export default Consumable




