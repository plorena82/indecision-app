import React from 'react';
import Modal from 'react-modal';

// the !! in the props.selectedOption is to convert the string to a boolean 
const OptionModal = (props) =>(
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected  Option"
            className="modal"
            closeTimeoutMS={200}
        >
        <h3 className="modal__title">Selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Ok</button>
        </Modal>
);

/* long syntax
const OptionModal = () =>{

    return (
        <div>
         some test
        </div>
    )
};
*/
export default OptionModal;