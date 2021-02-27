import React, {useReducer} from 'react'

const initialState = 0
const initialStateTwo = 50
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

            case 'reset2':
                return initialStateTwo
                break;

        default:
            return state
            break;
    }
}

function FuncCount6() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialStateTwo)
    return (
        <div>
           <h3> Count - {count} </h3>
          
            <div>
            <button onClick={() =>dispatch('increament')} >Increament</button>
            <button onClick={() =>dispatch('decreament')} >Decreament</button>
            <div>
            <button onClick={() =>dispatch('reset')} >Reset</button>
            </div>
            <h3> CountTwo - {countTwo}</h3>
            <button onClick={() =>dispatchTwo('increament')} >Increament</button>
            <button onClick={() =>dispatchTwo('decreament')} >Decreament</button>
            <div>
            <button onClick={() =>dispatchTwo('reset2')} >Reset</button>
            </div>
            </div>
        </div>
    )
}

export default FuncCount6
