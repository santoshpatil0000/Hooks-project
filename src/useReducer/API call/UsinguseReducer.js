import axios from 'axios';
import React, {useReducer, useEffect} from 'react'

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

            break;

            case 'FETCH_FAILURE':
            return {
                loading: false,
                post: {},
                error: <h2>'Something went wrong!'</h2>
            }

            break;
    
        default:
            return currentState
            break;
    }
}


function UsinguseReducer() {
const [newState, dispatch] = useReducer(reducer, initialState)

useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload :response.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_FAILURE'})
        })
    
}, [])

    return (
        <div>
            {newState.loading ? <h1>'Loading'</h1> : newState.post.title} 
            {newState.error ? newState.error : null }
        </div>
    )
}

export default UsinguseReducer
