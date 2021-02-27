import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increament':
            return state + 1
            break;
        
        case 'decreament':
            return state - 1
            break;
            
        case 'reset':
            return initialState
            break;

        default:
            return state
            break;
    }
}

function FuncCount6() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
           <h3> Count - {count} </h3>
            <div>
            <button onClick={() =>dispatch('increament')} >Increament</button>
            <button onClick={() =>dispatch('decreament')} >Decreament</button>
            <button onClick={() =>dispatch('reset')} >Reset</button>
            </div>
        </div>
    )
}

export default FuncCount6
