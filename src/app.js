//ES6 imports 
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//ReactDOM.render(<IndecisionApp defOptions={['One option','Two options','Three options']}/>, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



//STATELESS FUNCTIONAL COMPONENT EXAMPLE
/*const User = (props) =>{
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );

}
ReactDOM.render(<User name="Paula" age={5} />, document.getElementById('app'));
*/






/*
const template = <p>THIS IS JSX from WEBPACK</p>
ReactDOM.render(template, document.getElementById('app'));   

import validator from 'validator';

console.log(validator.isEmail('test@gma.com'));*/

// //import './utils.js';
/*
 import substract, {square, add} from './utils.js';

// console.log('APP is running!!');

 console.log(square(2));
 console.log(add(100,23));
 console.log(substract(30,20));



 //// Excercise
import isSenior, { isAdult, canDrink} from './person.js';
console.log(isAdult(20));
console.log(canDrink(20));
console.log(isSenior(65));

*/