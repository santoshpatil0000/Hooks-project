import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const IdContext = React.createContext()

function PassData() {
    return (
        <div>
            <UserContext.Provider value = {`Santosh`}>
                <IdContext.Provider value = {9036664017}>
                    <ComponentC/>
                </IdContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default PassData
