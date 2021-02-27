import React, {useState, useEffect} from 'react'

function FuncCount1() {
const [count, setCount] = useState(0)

useEffect (() => {
    document.title = `you fired ${count} times`
})
    return (
        <div>
            <button onClick = {() =>{setCount((prevCount) => prevCount + 1)}}>You clicked {count} times</button>
        </div>
    )
}

export default FuncCount1

