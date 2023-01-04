import {createContext , useState, useEffect} from 'react'
import writeToJSOM from './filesController.js'

const HistoryContext = createContext();

export function HistoryProvider({children}){

const [historyList , setHistoryList] = useState([]);


useEffect(() => {
const data = localStorage.getItem('HISTORY_LIST');
console.log(data);
if ( data !== null ) setHistoryList(...historyList,JSON.parse(data));
},[]);

useEffect(()=>{
    if(historyList.length)
    {
    localStorage.setItem('HISTORY_LIST',JSON.stringify(historyList));
    console.log("saved");
    }
    },[historyList]);
    

const addToHistory = (winningPlayer,date) =>{
    setHistoryList((prevState) => [...prevState , {winningPlayer,date}]);
    console.log(historyList);
    
};

    return(
        <HistoryContext.Provider value = {{historyList,addToHistory}}>
            {children}
        </HistoryContext.Provider>
    )

}




export default HistoryContext;