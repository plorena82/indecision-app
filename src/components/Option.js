import React from 'react';



//Stateless functional component
const Option = (props)=> 
    (
        <div className="option">
            <p className="option__text">
            {props.count}. {props.option}
            </p> 
            <button
            className="button button--link"
            onClick={(e) =>{ //here we created a function passing the event and then calling the handledeleteOption
                //as if we call directly the handleDeleteOption we would be passing the event and not the props.option as param (the behavior is that).
                props.handleDeleteOption(props.option);
                }
            }
            >
                Remove
            </button>
            
        </div>
    );


export default Option;

