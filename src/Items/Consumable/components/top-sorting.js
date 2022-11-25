import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown} from "react-icons/ai";

const SortItems = ( {filtConsumableList, setFiltConsumableList, iconToggle, setIconToggle}) => {

const [sortToggle, setSortToggle] = useState ({name:true, rarity:true, tear:true})

// if icon toggle = 0 no icon will be displayed, 1 ascending order, 2 descending order



  const sortName = () => {
    //ascending order
    if (sortToggle.name && filtConsumableList.length > 1) {
      const newSortedArr = [...filtConsumableList].sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setFiltConsumableList(newSortedArr);
      setSortToggle(prevState => ({name: !prevState.name}))
      setIconToggle({ name: 1, rarity:0 , tear: 0 })
    }

    //descending order
    if (!sortToggle.name && filtConsumableList.length > 1) {
      const newSortedArr = [...filtConsumableList].sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setFiltConsumableList(newSortedArr);
      setSortToggle(prevState => ({name: !prevState.name}))
      setIconToggle({ name: 2, rarity:0 , tear: 0  })
    }
  }

const sortRarity = () =>{
  if (sortToggle.rarity && filtConsumableList.length > 1) {

    const newSortedArr = [...filtConsumableList].sort((a, b) => {
      return a.rarity - b.rarity;
    });
    setFiltConsumableList(newSortedArr);
  
     setSortToggle(prevState => ({rarity: !prevState.rarity}))

     setIconToggle({ name: 0, rarity:1 , tear: 0  })
  }
  if (!sortToggle.rarity && filtConsumableList.length > 1) {
    const newSortedArr = [...filtConsumableList].sort((a, b) => {
      return b.rarity - a.rarity;
    });
    setFiltConsumableList(newSortedArr);
    setSortToggle(prevState => ({rarity: !prevState.rarity}))
     //remove icon from name other sort button pressed
     setIconToggle({ name: 0, rarity:2, tear: 0  })
  }

}

    
    const sortTear = () => {
      if (sortToggle.tear && filtConsumableList.length > 1) {
   console.log(sortToggle.tear)
        const newSortedArr = [...filtConsumableList].sort((a, b) => {
          return a.tier - b.tier;
        });
        setFiltConsumableList(newSortedArr);
        //remove icon from name other sort button pressed
        setSortToggle(prevState => ({tear: !prevState.tear}))
        setIconToggle({ name: 0, rarity:0, tear: 1  })
      };
   
    if (!sortToggle.tear && filtConsumableList.length > 1) {
  
        const newSortedArr = [...filtConsumableList].sort((a, b) => {
          return b.tier - a.tier;
        });
        setFiltConsumableList(newSortedArr);
         //remove icon from name other sort button pressed
     
         setIconToggle({ name: 0, rarity:0, tear: 2  })
         setSortToggle(prevState => ({tear: !prevState.tear}))
      };
    }

 

  


    return(
        <div className="top-sort-part">
        <div className="item-title-name" onClick={sortName}>Name  {iconToggle.name === 1 ? <AiFillCaretUp color="orange"></AiFillCaretUp>:
                                                                  iconToggle.name ===2 ?  <AiFillCaretDown color="orange"></AiFillCaretDown>:""} </div>
        <div className="item-title-rarity" onClick={sortRarity}>Rarity {iconToggle.rarity ===1 ? <AiFillCaretUp color="orange" ></AiFillCaretUp>:
                                                   iconToggle.rarity ===2 ? <AiFillCaretDown color="orange" ></AiFillCaretDown>:""}
      
       


        </div>
        <div className="item-title-tear" onClick={sortTear}>Tear {iconToggle.tear ===1 ? <AiFillCaretUp color="orange" ></AiFillCaretUp>:
                                                   iconToggle.tear ===2 ? <AiFillCaretDown color="orange" ></AiFillCaretDown>:""}

        </div>
      
        </div> 

    )
}

export default SortItems