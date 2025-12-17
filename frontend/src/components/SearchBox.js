import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            history.push(`/boutique/?keyword=${keyword}&page=1`)
        }
        else{
            history.push(history.push(history.location.pathname))
        }
    }

    return (
        <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control
                type='search'
                placeholder = 'Search'
                className='me-2'
                onChange={(e) => setKeyword(e.target.value)}
                
            > 
            
            </Form.Control>
            
            
        </Form>
    )
}

export default SearchBox
