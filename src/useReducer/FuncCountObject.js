import React, {useReducer} from 'react'

const initialState = {
    firstCount : 0,
    secondCount : 100
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'increament':
            return {...state, firstCount: state.firstCount + action.value}
            break;
        
        case 'decreament':
             return {...state, firstCount: state.firstCount - action.value}
            break;

            case 'second increament':
            return {...state, secondCount: state.secondCount + action.value}
            break;
        
        case 'second decreament':
             return {...state, secondCount: state.secondCount - action.value}
            break;
        case 'reset':
            return initialState
            break;
    
        default:
            return state
            break;
    }
}


function FuncCountObject() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
               First Count : {count.firstCount}
               <div>
               Second Cound : {count.secondCount}
               </div>
            </div>
            <button onClick= {() => dispatch({type: 'increament', value: 1})} >First Increament</button>
            <button onClick= {() => dispatch({type:'decreament', value: 1})} >First Decreament</button>
            <button onClick= {() => dispatch({type: 'increament', value: 5})} >First Increament 5</button>
            <button onClick= {() => dispatch({type:'decreament', value: 5})} >First Decreament 5</button>
            <div>
            <button onClick= {() => dispatch({type: 'second increament', value: 1})} >Second Increament</button>
            <button onClick= {() => dispatch({type:'second decreament', value: 1})} >Second Decreament</button>
            <button onClick= {() => dispatch({type: 'second increament', value: 5})} >Second Increament 5</button>
            <button onClick= {() => dispatch({type:'second decreament', value: 5})} >Second Decreament 5</button>
            </div>
            <button onClick= {() => dispatch({type:'reset'})} >Reset</button>
        </div>
    )
}

export default FuncCountObject
