import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    }
    const inputEventTwo = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(`${name}  ${lastName}`)
        
    }
    return (
        <div className='App'>
            <form onSubmit={onSubmit}>
                <h1>Hello {fullName} </h1>
                <input type="text" name="" id="" placeholder='Enter Your First Name' onChange={inputEvent} value={name} />
                <br /> <br />
                <input type="text" name="" id="" placeholder='Enter Your Last Name' onChange={inputEventTwo} value={lastName} />
                <br /> <br />
                <button type='submit' onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form