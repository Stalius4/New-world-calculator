
import './App.css';
import React, { useState,
  //  useEffect
  } from "react";
// import Consumable from './Items/Consumable/consumable';
// import Mote from './Items/Motes/motes';
import NavBar from './Components/NavBar/nav';
import Footer from './Components/Footer/footer';
import Woodworking from './Pages/Crafting/Woodworking/woodworking';
function App() {
//   const [loading, setLoading] = useState(false);
// const [consumableList, setConsumableList] = useState ([])
const [toggleNavbar, setToggleNavbar] = useState(true)




  return (
    <div className="App">
   
    <NavBar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}></NavBar>
    <div className={toggleNavbar ?'content-box': "content-box-mini"}>
      <Woodworking> </Woodworking>
    </div>
{/* <Consumable loading={loading} setLoading={setLoading}  consumableList={consumableList} setConsumableList={setConsumableList} ></Consumable> */}
<Footer></Footer>
</div>
   
  );
}

export default App;


// {
//   "rarity": 4,
//   "itemType": "Resource",
//   "icon": "lyshineui/images/icons/items/Resource/TimberT51.png",
//   "id": "timbert51",
//   "name": "Glittering Ebony",
//   "tier": 5
// },
// {
//   "rarity": 0,
//   "itemType": "Resource",
//   "icon": "lyshineui/images/icons/items/Resource/TimberT5.png",
//   "id": "timbert5",
//   "name": "Ironwood Planks",
//   "tier": 5
// },
// {
//   "rarity": 0,
//   "itemType": "Resource",
//   "icon": "lyshineui/images/icons/items/Resource/TimberT4.png",
//   "id": "timbert4",
//   "name": "Wyrdwood Planks",
//   "tier": 4
// },
// {
//   "rarity": 0,
//   "itemType": "Resource",
//   "icon": "lyshineui/images/icons/items/Resource/TimberT3.png",
//   "id": "timbert3",
//   "name": "Lumber",
//   "tier": 3
// },
// {
//   "rarity": 0,
//   "itemType": "Resource",
//   "icon": "lyshineui/images/icons/items/Resource/TimberT2.png",
//   "id": "timbert2",
//   "name": "Timber",
//   "tier": 2
// }