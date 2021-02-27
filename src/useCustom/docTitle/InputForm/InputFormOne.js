import React, { useState } from 'react'

function InputFormOne() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const changeHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }

    return (
        <div>
            <form onSubmit={changeHandler}>
                <div>
                    <label>
                        First Name
                    </label>
                    <input type='text' value={firstName} onChange={(e) =>setFirstName(e.target.value)} />
                    <div>
                    <label>
                        Last Name
                    </label>
                    <input type='text' value={lastName} onChange={(e) =>setLastName(e.target.value)} />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default InputFormOne
