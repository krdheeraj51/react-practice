// import React, { useState } from 'react';
import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import { render } from '@testing-library/react';

/**
 * functional Component
 */

// const App = props => {
//   const [ personState,setPersonState ] =
//   useState({
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Sntosh', age: 25 },
//         { name: 'Manish', age: 24 }
//       ],
//       otherState:"this is another state"
//     });

//    const switchNameHandler = () =>{
//       //console.log("was clicked ....");
//       // this.state.persons[0].name="Maxima";
//       setPersonState({
//         persons:[
//           {name:"Maxima",age:28},
//           {name:"Manu",age:25},
//           {name:"Manish",age:34}
//         ]
//       })
//     };
//     //console.log("personState ::",personState);

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React APP</h1>
//       <p>This is really working.</p>
//       {/* <Person name="Santosh" age="25"></Person>
//           <Person name="Gulshan" age="24"></Person>
//           <Person name="Karan" age="15">My hobbies are to play Kabddi and goes into deep meditation.</Person> */}
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} ></Person>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} ></Person>
//       <Person name={personState.persons[2].name} age={personState.persons[2].age} ></Person>
//     </div>
//   )

// }
// export default App;


/**
 * class component 
 */
class App extends Component {
  state = {
    persons: [
      { id: 'wert', name: 'Max', age: 28 },
      { id: 'wsar', name: 'Sntosh', age: 25 },
      { id: 'war', name: 'Manish', age: 24 }
    ],
    showPerson: false
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>

      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React APP</h1>
        <p>This is really working.</p>
        {/* <Person name="Santosh" age="25"></Person>
        <Person name="Gulshan" age="24"></Person>
        <Person name="Karan" age="15">My hobbies are to play Kabddi and goes into deep meditation.</Person> */}
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {/* {this.state.showPerson ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null}*/}
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

    // this.setState({
    //   persons: [
    //     { name: 'Monty', age: 28 },
    //     { name: 'Munny', age: 25 },
    //     { name: 'Satish', age: 32 }
    //   ]
    // })
  }


}

export default App;

// function App() {
//   return (
//     <div className="App">
//     <h1>Hi, I'm a React APP</h1>
//     <p>This is really working.</p>
//       <Person name="Santosh" age="25"></Person>
//       <Person name="Gulshan" age="24"></Person>
//       <Person name="Karan" age="15">My hobbies are to play Kabddi and goes into deep meditation.</Person>
//     </div>
//   );
// }


