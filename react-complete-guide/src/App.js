// import logo from './logo.svg';
import React from 'react';
import Person from './Person/person'
import './App.css';


function App() {
  return (
    <div className="App">
    <h1>Hi, I'm a React APP</h1>
    <p>This is really working.</p>
    



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Person name="Santosh" age="25"></Person>
      <Person name="Gulshan" age="24"></Person>
      <Person name="Karan" age="15">My hobbies are to play Kabddi and goes into deep meditation.</Person>
    </div>
  );
}

export default App;
