import './MainGame.css'
import Board from './Board.js'
import {useState} from 'react'
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
        <div className ="main-game">
            <h1 className = "tic-header">Tic Tac Toe Game!</h1>
    <h1>{isWinner}</h1>
    <Board curTurn = {turn} swapTurn = {changeTurn} winnerCheck = {winnerCheck}></Board>
    <h1>its {turn} turn!</h1>
        </div>
        
    );
}
export default MainGame;