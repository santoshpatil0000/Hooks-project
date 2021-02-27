import React, {useReducer} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const countContext = React.createContext()


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
 
function GlobalStateMngt() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <countContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
            Count- {count}
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
        </div>
        </countContext.Provider>
    )
}

export default GlobalStateMngt
