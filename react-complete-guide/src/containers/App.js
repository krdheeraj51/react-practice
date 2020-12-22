// import React, { useState } from 'react';
import React, { Component } from 'react';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from "./App.css";

/**
 * class component 
 */
class App extends Component {

  constructor(props){
    super(props);
    console.log('App.js Constructor .....');
  }
  state = {
    persons: [
      { id: 'wert', name: 'Max', age: 28 },
      { id: 'wsar', name: 'Sntosh', age: 25 },
      { id: 'war', name: 'Manish', age: 24 }
    ],
    showPerson: false
  }

  static getDerivedStateFromProps(props,state){
    console.log("App.js getDerivedState From props",props);
    return state;
  }

  componentDidMount(){
    console.log("App.js component Did Mount ......");
  }

  render() {
    console.log('App.js render ');
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        // <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}

          />

        // </div>

      );
      
    }
    
    return (

      <div className={classes.App}>
        <Cockpit
          title ={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}

        />
        {persons}
      </div>

    )
  }
  switchNameHandler = () => {
    console.log("was clicked ....");
    // this.state.persons[0].name="Maxima";
    this.setState({
      persons: [
        { name: "Maxima", age: 28 },
        { name: "Manu", age: 25 },
        { name: "Manish", age: 34 }
      ]
    })
  }
  /**
   * Toggle function for hidding and showing person details
   */
  togglePersonHandler = () => {

    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  /**
   * Delete person handler for deleting person details
   */
  deletePersonHandler = (personIndex) => {
    /**
    * updating state immutabelly
    */
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  /**
   * Name chnaged handler
   */
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({},this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
  }


}

export default App;

