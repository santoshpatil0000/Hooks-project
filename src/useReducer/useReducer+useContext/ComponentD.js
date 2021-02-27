import React, { useContext } from 'react'
import { countContext } from './GlobalStateMngt'

function ComponentD() {
    const countConsumer = useContext(countContext)
    return (
        <div>
            Component D count - {countConsumer.countState} .
            <button onClick={() =>countConsumer.countDispatch('increament')}>Increament</button>
            <button onClick={() =>countConsumer.countDispatch('decreament')}>Decreament</button>
            <button onClick={() =>countConsumer.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
