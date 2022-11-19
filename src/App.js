
import './App.css';
import React, { useState} from "react";
import Consumable from './Items/Consumable/consumable';

function App() {
  const [loading, setLoading] = useState(false);
const [consumableList, setConsumableList] = useState ([])


const [pageNumber, setPageNumber] = useState({
  firstIndex: 0,
  lastIndex: 10
})



  return (
    <div className="App">
   
    
<Consumable loading={loading} setLoading={setLoading} pageNumber={pageNumber} setPageNumber={setPageNumber} consumableList={consumableList} setConsumableList={setConsumableList} ></Consumable>

</div>
   
  );
}

export default App;
