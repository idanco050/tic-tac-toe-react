import Cell from './Cell.js'
import './Board.css'
import {useState,useEffect} from 'react'

const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const Board = (props) =>
{
const[turn , setTurn] = useState(props.curTurn)
const[board,setBoard] = useState(["","","","","","","","",""])

useEffect(() => {
    if (!isWinner()){
    isTie();
    }
}, [board])
const swapTurn = (ind) =>
{
setBoard(board.map((val,index) =>
{
if(ind === index && val === "")
{
    return turn;
}
else
{
    if(val != "")
    {
        return val;
    }
    else
    {
        return "";
    }
}
}));
if(turn === "X")
{
    setTurn("O");
    props.swapTurn("O");
}
else{
    setTurn("X");
    props.swapTurn("X");
}
}
const isWinner = () =>
{
    let isWin = false;
        console.log(board)
        patterns.forEach((curPat) =>{
            const fPlayer = board[curPat[0]];
            console.log(fPlayer);
            if(fPlayer === "")
            {
                return;
            }
            let win = true
            curPat.forEach((ind) =>{
                if (board[ind] != fPlayer){
                    win = false;
                }
            });
            if(win)
                {
                    isWin = true;
                    if (turn === "X"){
                        props.winnerCheck("the O player win!!!")
                        }
                        else{
                            props.winnerCheck("the X player win!!!")
                        }
                        
                    } 
        });
    return isWin;     
}

const isTie = () =>
{
    let tie = true;
    board.map((val) =>
    {
        if(val === "")
        {
            tie = false;
        }
    });
if(tie)
{
    props.winnerCheck("its a Tie!!!");
}

}

const resetButtonHandler = ()=>
{
    setBoard(board.map(() =>{
        return "";
    }));
    setTurn("X");
    props.swapTurn("X");
    props.winnerCheck("")

}
    return(
        <div>
        <div className = "game-board">
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[0]} ind = {0}></Cell>
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[1]} ind = {1}></Cell>
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[2]} ind = {2}></Cell>
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[3]} ind = {3}></Cell>
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[4]} ind = {4}></Cell>
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[5]} ind = {5}></Cell>
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[6]} ind = {6}></Cell>
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[7]} ind = {7}></Cell>
        <Cell turn ={turn} swapTurn = {swapTurn}  val ={board[8]} ind = {8}></Cell>
        </div>
        <button className ="reset-button" onClick = {resetButtonHandler}>Reset</button>
        </div>
    );
}

export default Board;