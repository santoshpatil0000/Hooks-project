import React,{useState, useEffect} from 'react'

function FuncCount5() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        //useEffect conditionally changes for only count button and not for setName
        console.log(`Conditionally- useEffect updated (FuncCount5.js)`)
        document.title = `you fired conditionally ${count} times`
    }, [count])
    return (
        <div>
            <input type='text' value={name} onChange={(e) =>{
                setName(e.target.value)
            }} />
            <button onClick={()=> setCount((prevCount) => prevCount + 1)}>Fired {count} times</button>
        </div>
    )
}

export default FuncCount5
