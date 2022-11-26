
import './App.css';
import React, { useState, useEffect} from "react";
import Consumable from './Items/Consumable/consumable';
import Mote from './Items/Motes/motes';
import NavBar from './Pages/NavBar/nav';

function App() {
  const [loading, setLoading] = useState(false);
const [consumableList, setConsumableList] = useState ([])





  return (
    <div className="App">
   
    <NavBar></NavBar>
<Consumable loading={loading} setLoading={setLoading}  consumableList={consumableList} setConsumableList={setConsumableList} ></Consumable>

</div>
   
  );
}

export default App;
