import React from 'react';
const Person = (props) => {
    // return <p>I'm a Person!!!!</p>
    return (
        <div>
            <p>I am {props.name}. I am {props.age} years old.</p>
            <p>I like to code and create open source platform.</p>
            <p>{props.children}</p>
        </div>

    )
}
export default Person;