import React,{useContext} from 'react';
import {globalContext} from '../Context'
function TransictionList({transictiondesc}) {
    const data=useContext(globalContext);
    
    return (
        <div className="history-list">
            <button onClick={() => {data.delTransiction(transictiondesc.id)}}>X</button>
            <p>{transictiondesc.type}</p>
            <p className={transictiondesc.amount>0 ? 'income-amount' : 'expense-amount'}>{transictiondesc.amount>0 ? <span> ${Math.abs(transictiondesc.amount)} </span> : <span> -${Math.abs(transictiondesc.amount)} </span>  }</p>
        </div>
    );
}

export default TransictionList;