import React from 'react';
import './Person.css';
const person = (props) => {
    // return <p>I'm a Person!!!!</p>
    return (
        <div className="Person">
            <p>I am {props.name}. I am {props.age} years old.</p>
            <p>I like to code and create open source platform.</p>
            <p>{props.children}</p>
            <input type="text" />
        </div>

    )
}
export default person;