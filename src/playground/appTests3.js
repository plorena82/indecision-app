class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.defOptions
        };

        
    }

     handleMakeDecision(){
        const random = Math.floor(Math.random() * this.state.options.length );
         const opt = this.state.options[random];
         alert(opt);
     }

    handleDeleteAllOptions(){ //function will be called from the child components
        this.setState( ()=> {
            return{
                options:[]
            };
        }
        );

    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value';
        }
        else if(this.state.options.indexOf(option) >-1){
            return 'This option already exists';
        }
        this.setState((prevState) =>{
            return{ 
                options : prevState.options.concat(option)
            };
        }  
        );
        
        console.log('added');
    }

    render(){
       // const title = 'Indecision'; This added in default props
       //title={title} removed from the Header tag 
        const subtitle = 'Put your hannds on coding';
   
        return(
            <div>
                <Header subtitle={subtitle} />
                <Action 
                hasOptions={this.state.options.length >0}
                handleMakeDecision={this.handleMakeDecision}
                />
                <Options
                 options={this.state.options}
                 handleDeleteAllOptions={this.handleDeleteAllOptions} />
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
            <div>Options component here
            <button onClick={props.handleDeleteAllOptions}> Remove All</button>
            <ol>
            { props.options.map( (option) =>  <Option key={option} option={option}/> )
            }
           </ol>
               
            </div>
        );
}


//Stateless functional component
const Option = (props)=> {
        return(
            <div>
                <li key={props.option}>{props.option}</li> 
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
        if(error){
           this.setState(() => { 
               return{
                   error
                //error: error
               };
            }
           ); 
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
