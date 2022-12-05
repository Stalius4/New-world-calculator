

export const listTimberPrice =  async (setDisplayTimberList) => {
    try {
    const response = await fetch("http://localhost:5002/timber/")
    const data = await response.json()
    
    setDisplayTimberList(data.result)
    // console.log(data.result)
    if (!response.ok){
      throw new Error(response.statusText)
    }

    // make sure result should me in array so I will be able tu use map()
    } catch (err) {
    }
  }

  export const createPriceList = async (timber, lumber,wyrdwoodPlank,ironwoodPlank,greenwood,agedwood,wyrdwood,ironwood) => {
    try {
    
      const res = await fetch("http://localhost:5002/timber/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            timber_price: timber,
            lumber_price: lumber,
            wyrdwoodplank_price: wyrdwoodPlank,
            ironwoodplank_price: ironwoodPlank,
            greenwood_price: greenwood,
            agedwood_price: agedwood,
            wyrdwood_price: wyrdwood,
            ironwood_price: ironwood,
           
        }),
      });
      const data = await res.json();
 console.log(data)
    } catch (error) {
      console.log(error);
  console.log(error.keyValue,"keyValue")

  };}


export const timberIcons =  async (setTimberIcon) => {
    try {
    const response = await fetch("http://localhost:5002/user/")
    const data = await response.json()
    
    setTimberIcon(data.result[1].timber)
   
    if (!response.ok){
      throw new Error(response.statusText)
    }
    } 
    catch (err) {
      
    }
  }