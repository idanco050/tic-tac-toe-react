import Cell from './Cell.js'
import './Board.css'
import moment from 'moment'
import {useState,useEffect,useContext} from 'react'
import HistoryContext from '../HistoryContext.js'


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
const {addToHistory} = useContext(HistoryContext);
const[turn , setTurn] = useState(props.curTurn);
const[isWin ,setIsWin] =useState(false)
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
        patterns.forEach((curPat) =>{
            const fPlayer = board[curPat[0]];
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
                    setIsWin(true);
                    let date = moment().format('D/MM/YYYY');
                    isWin = true;
                    if (turn === "X"){
                        props.winnerCheck("the O player win!!!")
                        let winner = "O"
                        addToHistory(winner,date)
                        }
                        else{
                            let winner = "X"
                            addToHistory(winner,date)
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
    let dateFormat2 = moment().format('D/MM/YYYY');
    addToHistory("draw",dateFormat2)
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
    props.winnerCheck("");
    setIsWin(false);

}
    return(
        <div>
        <div className = "game-board">
        {board.map((val,index)=>
        {
            return(<Cell key ={index} turn ={turn} swapTurn = {swapTurn}  val ={val} ind = {index} win ={isWin}></Cell>);
        })}
        </div>
        <button className ="reset-button" onClick = {resetButtonHandler}>Reset</button>
        </div>
    );
}

export default Board;