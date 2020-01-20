import React from 'react';


//Stateless functional component, short way sytax
const Action = (props) =>

    (
        <div>
            <button 
            className="big-button"
            onClick={props.handleMakeDecision}
            disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    );



export default Action;