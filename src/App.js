
import './App.css';
import React, { useState} from "react";
import Consumable from './Items/Consumable/consumable';

function App() {

const [consumableList, setConsumableList] = useState ([])
const [filtConsumableList, setFiltConsumableList] = useState([])

  return (
    <div className="App">
      <div className='yellow-line'></div>
      <div className='info-box'>
<Consumable consumableList={consumableList} setConsumableList={setConsumableList} filtConsumableList={filtConsumableList} setFiltConsumableList={setFiltConsumableList}></Consumable>

</div>
    </div>
  );
}

export default App;
