import React from 'react';
// import Radium from 'radium';
import './Person.css';
import styled from 'styled-components';

const StyleDiv =styled.div`
width:60%;
margin:16px auto;
border:1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding:16px;
text-align:center;
 @medai(min-width:500px){
     width:450px;
 }



`


const person = (props) => {
    // return <p>I'm a Person!!!!</p>




    return (
        <StyleDiv>
        <div className="Person">
            <p onClick={props.click}>I am {props.name}. I am {props.age} years old.</p>
            <p>I like to code and create open source platform.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.Changed}/>
        </div>
        </StyleDiv>

    )
}
// export default Radium(person);
export default person;