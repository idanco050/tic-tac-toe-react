import {createContext , useState, useEffect} from 'react'
import axios from 'axios'
const HistoryContext = createContext();

export function HistoryProvider({children}){

const [historyList , setHistoryList] = useState([]);

useEffect(() => {
axios.get('http://localhost:4000/').then(response => {
    let list = []
    if(response.data === "file is empty")
    {
        setHistoryList(...historyList,list)
    }
    else
    {
        console.log(response.data)
        response.data.forEach(element => {
            list.push(element)
        });
        
        setHistoryList(...historyList,list)
    }
  });
console.log(historyList)
},[]);

/*/useEffect(()=>{
    if(historyList.length)
    {
        
    }
    },[historyList]);

/*/
    

const addToHistory = (winningPlayer,date) =>{
    console.log({winningPlayer,date})
    axios.post('http://localhost:4000/',{winningPlayer,date});
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