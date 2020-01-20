class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.defOptions
        };

        
    }

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

     handleMakeDecision(){
        const random = Math.floor(Math.random() * this.state.options.length );
         const opt = this.state.options[random];
         alert(opt);
     }


     //function will be called from the child components return short way, notice the ( )after the arrow, 
     //it indicates we are returning an object
    handleDeleteAllOptions(){ 
        this.setState( ()=> ({ options:[]})  );

    }
    handleDeleteOption(optionToRemove){
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
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value';
        }
        else if(this.state.options.indexOf(option) >-1){
            return 'This option already exists';
        }
        this.setState((prevState) => ( { options : prevState.options.concat(option) } )  ); //short way
        
        console.log('added');
    }

    render(){
       // const title = 'Indecision'; This added in default props
       //title={title} removed from the Header tag 
        const subtitle = 'Put your hands on coding';
   
        return(
            <div>
                <Header subtitle={subtitle} />
                <Action 
                hasOptions={this.state.options.length >0}
                handleMakeDecision={this.handleMakeDecision}
                />
                <Options
                 options={this.state.options}
                 handleDeleteAllOptions={this.handleDeleteAllOptions}
                 handleDeleteOption={this.handleDeleteOption} />
                <AddOption 
                handleAddOption={this.handleAddOption}
                 />
             </div>
        );
    }
}

const Header = (props) =>{

        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>

        );
    
}

//DEFAULT PROPS 
Header.defaultProps ={
    title: 'Indecision'
};

//Stateless functional component
const Action = (props) =>{

        return(
            <div>
                <button 
                onClick={props.handleMakeDecision}
                disabled={!props.hasOptions}>
                What should I do?
                </button>
            </div>
        );
    
}


//Stateless functional component
const Options = (props) => {
        return(
            <div>
            <button onClick={props.handleDeleteAllOptions}> Remove All</button>
            {props.options.length === 0 && <p>Please add options to get started!</p>}
            <ol>
            { props.options.map( (option) => (
                     <Option
                     key={option} 
                     option={option}
                     handleDeleteOption={props.handleDeleteOption}
                     />
                ) )
            }
           </ol>
               
            </div>
        );
} 


//Stateless functional component
const Option = (props)=> {
        return(
            <div>
                <li key={props.option}>
                {props.option}
                <button onClick={(e) =>{ //here we created a function passing the event and then calling the handledeleteOption
                    //as if we call directly the handleDeleteOption we would be passing the event and not the props.option as param (the behavior is that).
                    props.handleDeleteOption(props.option);
                    }
                }
                >
                    Remove
                </button>
                </li> 
            </div>
        );
    

}

class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.optionF.value.trim();
        const error = this.props.handleAddOption(option);
         //error: error is the same
           this.setState(() => ({ error   })  );
           if(!error){
              e.target.elements.optionF.value ='';
           }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='optionF'/>
                    <button> Add option</button>
                    {this.state.error && <p> {this.state.error}</p>} 
                </form>
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
