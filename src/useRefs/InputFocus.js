import React, {useEffect, useRef} from 'react'

function InputFocus() {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
       
    }, [])

    const clickHandler = () => {
        alert(`${inputRef.current.value}`)
    }
    return (
        <div>
            <input type = 'text' ref = {inputRef} />
            <button onClick = {clickHandler} >Focus</button>
        </div>
    )
}

export default InputFocus
