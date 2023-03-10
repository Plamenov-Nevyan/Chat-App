import {useState} from "react";


export function useLocalStorage(){
  const [storedData, setStoredData] = useState(() => {
    let session = JSON.parse(localStorage.getItem('session'))
    return session !== null ? session : {}
 })

 const setToStorage = (key, data) => {
   localStorage.setItem("session", JSON.stringify({...storedData, [key] : data}))
   setStoredData(oldData =>{
    return {
        ...oldData, 
        [key] : data
     }
   })
 }

//  const removeFromStorage = (keyOrKeys) => {
//     console.log(keyOrKeys)
//    if (Array.isArray(keyOrKeys)){ 
//      setStoredData({...Object.fromEntries(Object.entries(storedData).filter(([currKey]) => keyOrKeys.includes(currKey) ))})
//    }else {
//     setStoredData({...Object.fromEntries(Object.entries(storedData).filter(([currKey]) => currKey !== keyOrKeys ))})
//    }
//    localStorage.setItem("session", JSON.stringify({...storedData}))
//  }

 const deleteSession = () => {
   localStorage.removeItem('session')
   setStoredData({})
 }

 const getFromStorage = (key) => storedData[key]

 return {
    setToStorage,
   //  removeFromStorage,
    getFromStorage,
    deleteSession
 }

}