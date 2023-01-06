import {AgGridReact} from 'ag-grid-react'
import HistoryContext from "../HistoryContext.js";
import './HistoryPopUp.css'
import { useState, useContext,useRef,useMemo } from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const FilterPopUp = (props) => 
{
    const { historyList } = useContext(HistoryContext);
    const[columnDefs , setColumnDefs] =useState([
    {field:'winningPlayer' , filter: "agTextColumnFilter"},
    {field:'date' , filter: "agDateColumnFilter",
filterParams:{
    comparator:(dateFromFilter , cellValue)=>{
        if(cellValue == null) {return 0;}

        const dateParts = cellValue.split('/');
        const day = Number(dateParts[0])
        const month = Number(dateParts[1]) - 1;
        const year = Number(dateParts[2])
        const cellDate = new Date(year,month,day);

        if(cellDate < dateFromFilter){
            return -1;
        }
        else if(cellDate > dateFromFilter){
            return 1;
        }
        return 0;
    }
  }
}
    ]);
    const defaultColDef = useMemo(()=>({flex : 1}),[]);

    return(props.trigger) ? (
        <div className ="pop-up">
            <div className ="pop-up-inner">
                <div className = 'ag-theme-alpine' style ={{height: 500}}>
                    <AgGridReact rowData = {historyList} columnDefs={columnDefs}/>
                <button className="close-btn" onClick = {props.closeFilter}>close</button>
                {props.children}
            </div>
        </div>
        </div>
    ) : "";
}

export default FilterPopUp;