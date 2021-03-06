import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    // btnClass = classes.Red;
    if (props.showPersons) {

        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //red
    } if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //red, bold
    }

    return (

        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>
                This is React application
           </p>
            <button className={btnClass}
                onClick={props.clicked}>
                Toggle Person
           </button>
        </div>
    )
}

export default cockpit;