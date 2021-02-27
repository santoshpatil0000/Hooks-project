import React, { useContext } from 'react'
import { countContext } from './GlobalStateMngt'

function ComponentF() {

    const countConsumer = useContext(countContext)
    return (
        <div>
            Component F count - {countConsumer.countState} .
            <button onClick={() =>countConsumer.countDispatch('increament')}>Increament</button>
            <button onClick={() =>countConsumer.countDispatch('decreament')}>Decreament</button>
            <button onClick={() =>countConsumer.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
