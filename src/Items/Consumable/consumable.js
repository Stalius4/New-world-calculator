import React, { useEffect, useState } from "react";

import "./consumable.css"
import nwlogo from "../Images/logo.png"
import Pagination from "./pagination";
import Filter from "./components/filter";
import SortItems from "./components/top-sorting";
const Consumable= ({loading,setLoading ,consumableList, setConsumableList})=>{

  const [filtConsumableList, setFiltConsumableList] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

//pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = filtConsumableList.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = pageNumber => setCurrentPage(pageNumber);
//================================

useEffect (() => {
  // fetchPhotos(setRandomPic)
  const listConsumable =  async (setUserList) => {
    try {
      setLoading(true);
    const response = await fetch("http://localhost:5002/user/")
    const data = await response.json()
   
    setConsumableList(data.result[0].data)
    setFiltConsumableList(data.result[0].data);
    setLoading(false);
    if (!response.ok){
      throw new Error(response.statusText)
    }

    // make sure result should me in array so I will be able tu use map()
    } catch (err) {
    }
  }
 listConsumable()
}, [])
  



   
    if (loading) {
      return <h2>Loading...</h2>;
    }
  

      return (
        <div className="main-box">
<SortItems filtConsumableList={filtConsumableList} setFiltConsumableList={setFiltConsumableList} consumableList={consumableList} setCurrentPage={setCurrentPage} ></SortItems>
            <Filter></Filter>
            <div className="map-item-box">
       {currentItem.map((item, index) => {
    
        return (
          
          <div key={index} className={index % 2 === 0 ?"item-box":
          "item-box-white"}>

            <img className={item.rarity === 0 ? "item-image-rarity-0":
           item.rarity === 1 ? "item-image-rarity-1": 
           item.rarity === 2 ? "item-image-rarity-2": 
           item.rarity === 4 ? "item-image-rarity-4": 
           "item-image-rarity-0"}
              src={`https://cdn.nwdb.info/db/images/live/v17/icons/items/consumable/${item.id }.png` }
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
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filtConsumableList.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
            <img src={nwlogo} alt="" className="logo-spin" />
      </div>
      </div>)
}

export default Consumable




