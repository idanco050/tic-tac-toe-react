import './MainGame.css'
import Board from './Board.js'
import {useState , useContext} from 'react'
import {HistoryProvider} from '../HistoryContext.js'
const MainGame = () =>
{
    const[turn,setTurn] = useState("X");
    const[isWinner ,setWinner] = useState("")
    const changeTurn = (player) =>
    {
        setTurn(player);
    
    };
    const winnerCheck = (message) =>
    {
        setWinner(message);
    }
    return(
        <HistoryProvider>
        <div className ="main-game">
            <h1>TIC TAC TOE</h1>
    <h1>{isWinner}</h1>
    <Board curTurn = {turn} swapTurn = {changeTurn} winnerCheck = {winnerCheck}></Board>
    <h1>its {turn} turn!</h1>
        </div>
        </HistoryProvider>
        
    );
}
export default MainGame;