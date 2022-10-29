
import './App.css';
import React, { useState} from "react";
import Consumable from './Items/Consumable/consumable';

function App() {

const [consumableList, setConsumableList] = useState ([])


  return (
    <div className="App">
      <div className='yellow-line'></div>
      <div className='info-box'>
<Consumable consumableList={consumableList} setConsumableList={setConsumableList}></Consumable>

</div>
    </div>
  );
}

export default App;
