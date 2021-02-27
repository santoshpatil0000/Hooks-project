import React, {useState} from 'react'

function FuncCount4() {
    const [items, setItems] = useState([])

    const addItem = () => {
        //We are adding values to the array of objects
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    //Use paranthesis after item arrow mark
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default FuncCount4
