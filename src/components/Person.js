import React from 'react'
export const Person = (props) => {
    const [age, setAge] = React.useState(props.age)
    return (
        <div>
            <h1>My name is {props.name}</h1>
            <p>I am {age} years old and my enrollment no is {props.enrollmentNo}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    )
}