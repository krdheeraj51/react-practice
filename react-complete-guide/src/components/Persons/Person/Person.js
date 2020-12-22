import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log("person.js is rendering .....");

        return (
            <div className={classes.person}>
                <p onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} years old.</p>
                <p>I like to code and create open source platform.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.Changed}
                    value={this.props.name} />
            </div>
        )

    }
}


export default Person;