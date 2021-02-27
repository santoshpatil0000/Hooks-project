import React, {useContext, useReducer} from 'react'
import { countContext } from './GlobalStateMngt'



function ComponentA() {
    const countConsumer = useContext(countContext)
    return (
        <div>
            Component A count - {countConsumer.countState} .
            <button onClick={() =>countConsumer.countDispatch('increament')}>Increament</button>
            <button onClick={() =>countConsumer.countDispatch('decreament')}>Decreament</button>
            <button onClick={() =>countConsumer.countDispatch('reset')}>Reset</button>

        </div>
    )
}

export default ComponentA
