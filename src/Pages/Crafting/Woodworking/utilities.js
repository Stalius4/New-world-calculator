


export const listTimberPrice =  async (setDisplayTimberList) => {
    try {
        
    const response = await fetch("https://nw-back-end-production.up.railway.app/timber/")
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

  export const createPriceList = async (timber, lumber,wyrdwoodPlank,ironwoodPlank,greenwood,agedwood,wyrdwood,ironwood, sandpaper) => {
    try {
    
      const res = await fetch("https://nw-back-end-production.up.railway.app/timber/", {
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
            sandpaper_price: sandpaper,
           
        }),
      });
      const data = await res.json();
 console.log(data)
    } catch (error) {
      console.log(error);
  console.log(error.keyValue,"keyValue")

  };}


  export const latestTimberPrice =  async (setLatestPrice, latestPrice, setLoading,) => {
    try {
      setLoading(true);
    const response = await fetch("https://nw-back-end-production.up.railway.app/timber/")
    const data = await response.json()
    
   let result = data.result.at(-1)



    
  setLatestPrice ({
    ...latestPrice,
    timber: result.timber_price,
    lumber: result.lumber_price,
    wyrdWoodPlank: result.wyrdwoodplank_price,
    ironWoodPlank:result.ironwoodplank_price,
    greenWood:result.greenwood_price,
    agedWood:result.agedwood_price,
    wyrdWood:result.wyrdwood_price,
    ironWood:result.ironwood_price,
    sandpaper:result.sandpaper_price,
  })
  
  setLoading(false);
 
    if (!response.ok){
      throw new Error(response.statusText)
    }

    // make sure result should me in array so I will be able tu use map()
    } catch (err) {
    }
  }