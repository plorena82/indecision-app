class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility : false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
           return{
                visibility: !prevState.visibility
           }
        });
    }

    render(){
        const subtitle = 'Visibility Toggle';
        return (
            <div>
                <h1> {subtitle}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide details':'Show details'}</button>
                {
                    this.state.visibility && (  <p>Details shown here </p>)
                }
            </div>
        );

    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));