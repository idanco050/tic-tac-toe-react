import "./Cell.css"
import {useState} from 'react'
const Cell = (props) =>
{
    const handleClick = () =>
    {
        props.swapTurn(props.ind)
    }
return(
<div className="cell" onClick ={handleClick}>
<h1>{props.val}</h1>
</div>
);
}
export default Cell;