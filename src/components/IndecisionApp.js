import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    /*
    constructor(props){
        super(props);
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : [] //props.defOptions
        };

        
    }*/
    state = {
        options : [], //props.defOptions
        selectedOption: undefined
    };



     handleMakeDecision = ()=>{
        const random = Math.floor(Math.random() * this.state.options.length );
         const opt = this.state.options[random];
         this.setState( () =>  ( {selectedOption: opt}  ) );
        
     };


     //function will be called from the child components return short way, notice the ( )after the arrow, 
     //it indicates we are returning an object
    handleDeleteAllOptions = () =>{ 
        this.setState( ()=> ({ options:[]})  );

    };
    handleClearSelectedOption = () =>{
        this.setState( 
            () => ({ selectedOption: undefined})
        );
    }

    handleDeleteOption = (optionToRemove) =>{
        this.setState(
            (prevState) => ({
                options: prevState.options.filter((option) => {
                        return optionToRemove!==option; //indicating we want to remove this option from the array
                        //filter will iterate over optiosn and put in options all the elements of the options array (option != optionToRemove)
                        //and remove/filter the one which does not meet the condition (optionToREmove == option)
                })
            })
        );

//        console.log('Handle delete option:', optionToRemove);
    };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value';
        }
        else if(this.state.options.indexOf(option) >-1){
            return 'This option already exists';
        }
        this.setState((prevState) => ( { options : prevState.options.concat(option) } )  ); //short way
        
        console.log('added');
    };


    ////LIFECYCLE METHODS
    //initializes the stae and props of Class components
    componentDidMount(){
        try{
         //   console.log('Did Mount!, fetching data');
            const json = localStorage.getItem('options'); //brings the data which is in localStorage
            const options = JSON.parse(json);
            if(options){//to ensure we are not setting the options array null in our state
            this.setState ( () => ({options: options}) ); //set the options with the value in localstorage
            }
        }
        catch(e){//to catch invalid values of JSON when parsing
            //do nothing, but avoids braking the app
    
        }
    }

    //changes in props and state
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
//console.log('Component update');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    //when we switch to another page, to unmount the component
    componentWillUnmount(){

    }      
    
////////////////////////////////////

    render(){
       // const title = 'Indecision'; This added in default props
       //title={title} removed from the Header tag 
        const subtitle = 'Put your hands on coding';
   
        return(
            <div>
                <Header subtitle={subtitle} />
               
                <div className="container">
                    
                    <Action 
                    hasOptions={this.state.options.length >0}
                    handleMakeDecision={this.handleMakeDecision}
                    />
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        handleDeleteAllOptions={this.handleDeleteAllOptions}
                        handleDeleteOption={this.handleDeleteOption} />
                        <AddOption 
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                 </div>
                 <OptionModal 
                 selectedOption={this.state.selectedOption}
                 handleClearSelectedOption={this.handleClearSelectedOption} />
             </div>
        );
    }
}

/*
const jsx = (

    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>);
*/

// DEFAULT PROPS in this case we configure as default an array of options, it is empty but we can set the 
//values in the IndecisionApp as attribute defOptions.
//Notice that defOption={} uses {} for a javascript expression in this case the array of default values we want to set
IndecisionApp.defaultProps ={
    defOptions : []
};