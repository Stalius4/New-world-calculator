
import './App.css';
import React, { useState} from "react";
import Consumable from './Items/Consumable/consumable';

function App() {

const [consumableList, setConsumableList] = useState ([])
const [filtConsumableList, setFiltConsumableList] = useState([])

  return (
    <div className="App">
   
    
<Consumable consumableList={consumableList} setConsumableList={setConsumableList} filtConsumableList={filtConsumableList} setFiltConsumableList={setFiltConsumableList}></Consumable>

</div>
   
  );
}

export default App;
