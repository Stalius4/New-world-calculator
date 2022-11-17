
import './App.css';
import React, { useState} from "react";
import Consumable from './Items/Consumable/consumable';

function App() {

const [consumableList, setConsumableList] = useState ([])
const [filtConsumableList, setFiltConsumableList] = useState([])

const [pageNumber, setPageNumber] = useState({
  firstIndex: 0,
  lastIndex: 10
})



  return (
    <div className="App">
   
    
<Consumable pageNumber={pageNumber} setPageNumber={setPageNumber} consumableList={consumableList} setConsumableList={setConsumableList} filtConsumableList={filtConsumableList} setFiltConsumableList={setFiltConsumableList}></Consumable>

</div>
   
  );
}

export default App;
