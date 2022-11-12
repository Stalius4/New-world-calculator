import React, { useEffect, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineCaretLeft } from "react-icons/ai";
import "./consumable.css"

const Consumable= ({consumableList, setConsumableList, filtConsumableList, setFiltConsumableList})=>{

const [pageNumber, setPageNumber] = useState({
  firstIndex: 0,
  lastIndex: 10
})



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
          setFiltConsumableList(itemArr)
          console.log(filtConsumableList, "filt list")
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          

        })
      } catch (error) {}
    };
    
    fetchData()
    // eslint-disable-next-line
  }, []);
  
  const nextPage = ()=> {
  

    if(filtConsumableList.length > pageNumber.lastIndex ){
      setPageNumber({ firstIndex: pageNumber.firstIndex + 10, lastIndex:pageNumber.lastIndex +10})
    }
  }
  
  
  
  
  
  const previousPage = ()=> {
    console.log(consumableList,"listas")
    if(pageNumber.firstIndex <= 0 ){
    
    }else{
      setPageNumber({ firstIndex: pageNumber.firstIndex - 10, lastIndex:pageNumber.lastIndex -10})
    }
   
     
    
    }


    const sortTearUp = () => {
    
        const newSortedArr = [...filtConsumableList].sort((a,b) => {
      
            return a.tier - b.tier
        })
        setFiltConsumableList(newSortedArr)
    }

      const sortTearDown = () =>{
        const newSortedArr = [...filtConsumableList].sort((a, b) =>{ 
            return b.tier - a.tier})
            setFiltConsumableList( newSortedArr )
      
      }
      const sortGearUp = () =>{
        console.log(consumableList, "pirmas")
        const newSortedArr = [...filtConsumableList].sort((a, b) =>{ 
            return a.rarity - b.rarity
          })
          setFiltConsumableList( newSortedArr )
      }

      const sortGearDown = () =>{
        console.log(consumableList, "pirmas")
        const newSortedArr = [...filtConsumableList].sort((a, b) =>{ 
            return b.rarity - a.rarity
          })
          setFiltConsumableList( newSortedArr )
      }


const changeRarity=(e) => {

  const result = consumableList.filter(({ rarity }) => rarity == e.target.value);

setFiltConsumableList(result)
setPageNumber({
  firstIndex: 0,
  lastIndex: 10
})
}


      return (
        <div className="main-box">
          <div className="top-sort-part">
            <div className="item-title-name">Name</div>
            <div className="item-title-rarity">Rarity
            <AiFillCaretUp color="orange" onClick={ sortGearUp  }>fds</AiFillCaretUp>
            <AiFillCaretDown color="orange" onClick={sortGearDown  }></AiFillCaretDown>

            <label for="Rarity"></label>

<select id="Rarity" onChange={(e)=>changeRarity(e) }>
  <option value="0" >Common</option>
  <option value="1">Uncommon</option>
  <option value="2">Rare</option>
  <option value="3">Epic</option>
  <option value="4">Legendary</option>
</select>
            </div>
            <div className="item-title-tear">Tear
            <AiFillCaretUp color="orange" onClick={sortTearUp  }>fds</AiFillCaretUp>
            <AiFillCaretDown color="orange" onClick={ sortTearDown  }></AiFillCaretDown>
            </div>
          
            </div> 
            
            <div className="map-item-box">
       {filtConsumableList.slice(pageNumber.firstIndex,pageNumber.lastIndex).map((item, index) => {
    
        return (
          
          <div key={index} className={index % 2 === 0 ?"item-box":
          "item-box-white"}>

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
      
     } </div> 
    
     <div className="bottom-navigation">
     <div className="mini-line"></div>
      <div className="small-line"></div>
      <div className="medium-line"></div>
      <div className="long-line"></div>
<div className="both-page-btn">
     <AiOutlineCaretLeft color="77C3EC" size={15} onClick={previousPage} className="clickLeft"></AiOutlineCaretLeft>
      <AiOutlineCaretRight color="77C3EC" size={15} onClick={nextPage} className="clickRight"></AiOutlineCaretRight>
      </div>
      </div>
      </div>)
}

export default Consumable




