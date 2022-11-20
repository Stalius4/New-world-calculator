import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown} from "react-icons/ai";

const SortItems = ( {filtConsumableList, setFiltConsumableList, consumableList, setCurrentPage}) => {

const [nameToggle, setNameToggle] = useState (true)
const [iconToggle, setIconToggle] =useState (0)
    const sortName = () =>{
        //ascending order
        if(nameToggle && filtConsumableList.length > 1 ){
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
             setNameToggle(!nameToggle)
             setIconToggle(1)
        }

        
    //descending order
        if(!nameToggle  && filtConsumableList.length > 1 ){
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
             setNameToggle(!nameToggle)
             setIconToggle(2)
        }


    }


    
    const sortTearUp = () => {
        const newSortedArr = [...filtConsumableList].sort((a, b) => {
          return a.tier - b.tier;
        });
        setFiltConsumableList(newSortedArr);
        //remove icon from name other sort button pressed
        setIconToggle(0)
      };
  
      const sortTearDown = () => {
        const newSortedArr = [...filtConsumableList].sort((a, b) => {
          return b.tier - a.tier;
        });
        setFiltConsumableList(newSortedArr);
         //remove icon from name other sort button pressed
         setIconToggle(0)
      };
      const sortGearUp = () => {
        console.log(consumableList, "pirmas");
        const newSortedArr = [...filtConsumableList].sort((a, b) => {
          return a.rarity - b.rarity;
        });
        setFiltConsumableList(newSortedArr);
         //remove icon from name other sort button pressed
         setIconToggle(0)
      };
  
      const sortGearDown = () => {
        console.log(consumableList, "pirmas");
        const newSortedArr = [...filtConsumableList].sort((a, b) => {
          return b.rarity - a.rarity;
        });
        setFiltConsumableList(newSortedArr);
         //remove icon from name other sort button pressed
         setIconToggle(0)
      };
  
      const changeRarity = (e) => {
        const result = consumableList.filter(
          ({ rarity }) => rarity == e.target.value
        );
  
        setFiltConsumableList(result);
       setCurrentPage(1)
         //remove icon from name other sort button pressed
         setIconToggle(0)
      };

    return(
        <div className="top-sort-part">
        <div className="item-title-name" onClick={sortName}>Name  {iconToggle === 1 ? <AiFillCaretUp color="orange"></AiFillCaretUp>:
                                                                    iconToggle ===2 ?  <AiFillCaretDown color="orange"></AiFillCaretDown>:""} </div>
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
        <AiFillCaretUp color="orange" onClick={sortTearUp  }></AiFillCaretUp>
        <AiFillCaretDown color="orange" onClick={ sortTearDown  }></AiFillCaretDown>
        </div>
      
        </div> 

    )
}

export default SortItems