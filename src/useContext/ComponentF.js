import React, {useContext} from 'react'
import { UserContext, IdContext } from './PassData'

function ComponentF() {

    const user = useContext(UserContext)
    const id = useContext(IdContext)
    return (
        <div>
            My name is <h3>{user}</h3> and contact number is <h3>{id}</h3>
        </div>
    )
}

export default ComponentF
