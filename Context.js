import React,{ createContext,useReducer } from 'react';
import {applicationReducer} from './applicationReducer';
const initialState={
    transictions:[
    {id:1,type:'payment',amount:10000},
    {id:2,type:'book',amount:-5000},
    {id:3,type:'Grocery',amount:-1000}],
};


export const globalContext=createContext(initialState);

export const ContextProvider = ({children}) =>  {
    
    const [state,dispatch]=useReducer(applicationReducer,initialState);
    const addTransiction = (amount,type) => {
        console.log(`${amount} and ${type}`)
        dispatch({
            type:'ADD_TRANSICTION',
            payload:{
                amount:amount,
                type:type
            }

        })
    }
    const delTransiction = (id) => {
        console.log(`delete item with id${id}`)
        dispatch({
            type:'DEL_TRANSICTION',
            payload:id

        })
    }


    return (
        <globalContext.Provider value={{transictions:state.transictions,addTransiction:addTransiction,delTransiction:delTransiction}}>
            {children}
        </globalContext.Provider>
    );
}

