import './HistoryPopUp.css'
const HistoryPopUp = (props) => 
{
    return(props.trigger) ? (
        <div className ="pop-up">
            <div className ="pop-up-inner">
                <button className="close-btn" onClick = {props.closePop}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default HistoryPopUp;