import React from 'react';

export default class AddOption extends React.Component{
    //with the new plugin transform-class-properties we can put directly the state properties in class, instead of using constructor
    state = {
        error: undefined
    };


   /* constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }*/
    //instead of binding the function in constructor, we transform the function into arrow and using the new plugin transform-class-properties, no need to bind 
    handleAddOption = (e) =>{
        e.preventDefault();
        const option = e.target.elements.optionF.value.trim();
        const error = this.props.handleAddOption(option);
         //error: error is the same
           this.setState(() => ({ error   })  );
           if(!error){
              e.target.elements.optionF.value ='';
           }
    };

    render(){
        return(
            <div>
                <form className="add-option" onSubmit={this.handleAddOption}>
                   {this.state.error && <p className='add-option-error'> {this.state.error}</p>}
                    <input className="add-option__input" type='text' name='optionF'/>
                    <button className="button"> Add option</button>
                    
                </form>
            </div>
        );
    }

}