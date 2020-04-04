export const applicationReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TRANSICTION':{
            let id=state.transictions.length+1;
            let {type,amount} =action.payload;
            return {...state,transictions:[...state.transictions,{id,type:type,amount:amount}]}
        }
        case 'DEL_TRANSICTION':{
            return {...state,transictions:state.transictions.filter(items => items.id!==action.payload)}
        }
        default:
            return state;
    }
}