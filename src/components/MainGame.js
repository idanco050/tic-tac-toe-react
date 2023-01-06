import "./MainGame.css";
import Board from "./Board.js";
import HistoryPopUp from "./HistoryPopUp.js";
import { useState, useContext } from "react";
import HistoryContext from "../HistoryContext.js";
import FilterPopUp from "./FilterPopUp";
const MainGame = () => {
  const [turn, setTurn] = useState("X");
  const [isWinner, setWinner] = useState("");
  const [historyPop, setHistoryPop] = useState(false);
  const { historyList } = useContext(HistoryContext);
  const [filterPop , setFilerPop] = useState(false);

  const historyButtonHandler = () => {
    setHistoryPop(true);
  };

  const filterButtonHandler =() =>
  {
      setFilerPop(true);
  };

  const closeFilter = () => {
      setFilerPop(false);
  }

  const closePop = () => {
    setHistoryPop(false);
  };

  const changeTurn = (player) => {
    setTurn(player);
  };
  const winnerCheck = (message) => {
    setWinner(message);
  };
  return (
    <div className="main-game">
      <h1>TIC TAC TOE</h1>
      <h1>{isWinner}</h1>
      <Board
        curTurn={turn}
        swapTurn={changeTurn}
        winnerCheck={winnerCheck}
      ></Board>
      <h1>its {turn} turn!</h1>
      <button onClick={historyButtonHandler} className = 'g-btn'>Show Games History</button>
      <HistoryPopUp trigger={historyPop} closePop={closePop}>
        {historyList.map((val, index) => {
          return (
            <li key={index}>
              {" "}
              Player Won :{val.winningPlayer} Date : {val.date}
            </li>
          );
        })}
      </HistoryPopUp>
      <button onClick = {filterButtonHandler} className = "g-btn">Filter Game History</button>
      <FilterPopUp trigger = {filterPop} closeFilter ={closeFilter}>
      </FilterPopUp>
    </div>
  );
};
export default MainGame;
