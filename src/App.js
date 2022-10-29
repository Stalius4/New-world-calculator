
import './App.css';
import React, { useState} from "react";
import Consumable from './Items/Consumable/consumable';

function App() {

const [consumableList, setConsumableList] = useState ([])


  return (
    <div className="App">
<Consumable consumableList={consumableList} setConsumableList={setConsumableList}></Consumable>
    </div>
  );
}

export default App;
