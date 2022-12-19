export const listUsers =  async (setUserList) => {
    try {
    const response = await fetch("https://nw-back-end-production.up.railway.app/user/")
    const data = await response.json()
    console.log(response,"resp")
    setUserList(data.result.data)
    if (!response.ok){
      throw new Error(response.statusText)
    }

    // make sure result should me in array so I will be able tu use map()
    } catch (err) {
    }
  }