import React,{useState,useContext} from 'react';
import {globalContext} from '../Context'
import TransictionList from './TransictionList';
function ExpenseCard(props) {
    const {transictions,addTransiction}=useContext(globalContext);
    console.log(transictions);
    const [type,setType]=useState("");
    const [amount,setAmount]=useState("");
    let incomeSum=0;
    for(let i=0;i<transictions.length;i++){
        if(transictions[i].amount>0){
            incomeSum+=transictions[i].amount;
        }
    }
    let expenseSum=0;
    for(let i=0;i<transictions.length;i++){
        if(transictions[i].amount<0){
            expenseSum+=Math.abs(transictions[i].amount);
        }
    }
    //@desc submitHandler Function
    const submitHandler= (e) => {
        e.preventDefault();
        if(parseInt(amount)>0){
            
             addTransiction(parseInt(amount),type);
        }
        else{
            
                addTransiction(parseInt(amount),type);
            
        }
    }
    return (
        <div className="expense-card">
            <div>
            <h1>Balance $</h1>
            <p>{incomeSum-expenseSum}</p>

            </div>
            <div className="income-expense">
              <div >
                  <span className="income">Income</span>
                  <p>{incomeSum}</p>
              </div>
              <div >
              <span className="expenses">Expenses</span>
                  <p>{expenseSum}</p>
              </div>
            </div>
            <h1>HISTORY</h1>
            <div>
                {transictions.map((items)=>{
                    return(
                        <TransictionList key={items.id} transictiondesc={items} />
                    )
                })}
            </div>
            <form className="expense-card-form" onSubmit={(e)=>submitHandler(e)}>
                <input type="text" name="type" value={type} placeholder="Enter the type transiction" onChange={(e)=>{
                    setType(e.target.value);
                }}/>
                <input type="text" name="amount" value={amount} placeholder="Enter the type of transiction" onChange={(e)=>{
                    setAmount(e.target.value);
                }}/>
                <button  className="btn-form" type="submit">
                 Transiction
            </button>     
            </form>
            
        </div>
    );
}

export default ExpenseCard;