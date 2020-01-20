class Counter  extends React.Component{

    constructor(props){
        super(props);
        //set the contexts

        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);

        this.state ={
            count: 0
        };
    }

    componentDidMount(){
        const numString = localStorage.getItem('count');
        const num = parseInt(numString,10);
        if(!isNaN(num)){
            this.setState(
                () => ({count: num})
            );
        }

    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){

            localStorage.setItem('count', this.state.count);
        }
        
    }

    componentWillUnmount(){

    }

    addOne(){
        this.setState((prevState) =>{
            return {
                count : prevState.count +1
            }
        });
    }
    minusOne(){
        this.setState((prevState) =>{
            return {
                count : prevState.count -1
            }
        });
    }
    reset(){
        this.setState(() =>{
            return {
                count : 0
            }
        });
    }
    render(){

        return(
            <div>
            <h1> Count: {this.state.count}</h1>
            <button id="idbutton1" className="button"  onClick={this.addOne}>+1</button>
            <button id="idbutton2" className="button"  onClick={this.minusOne}>-1</button>
            <button id="idbutton3" className="button"  onClick={this.reset}>Reset</button>
        </div>
        );
    }


}


//remove the default as we are not using for this example
/*
Counter.defaultProps = {

    defCount : 0
};

 defCount={0}
*/

ReactDOM.render(<Counter/>, document.getElementById('app'));