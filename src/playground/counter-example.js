
const somId = 'myIdHere';

//example of inline call click in button
const template2 =(
    <div>
        <h1> Count: {count}</h1>
        <button id={somId} className="button" onClick={() =>{
            console.log('ADD ONE TEMPLATE 222222');
           }  
        }>+1</button>
    </div>
);

let count =0;

const addOne = () =>{
    count ++;
    renderCounterApp();
    console.log('ADD ONE');
};

const minusOne =()=>{
    count--;
    renderCounterApp();
    console.log('Minus one');
};

const reset = () =>{
    console.log('RESET');
    count =0;
    renderCounterApp();
};

const renderCounterApp = () =>{
    
const templateTwo =(
    <div>
        <h1> Count: {count}</h1>
        <button id={somId} className="button" onClick={addOne}>+1</button>
        <button id="idbutton2" className="button" onClick={minusOne}>-1</button>
        <button id="idbutton3" className="button" onClick={reset}>Reset</button>
    </div>
);

//console.log(templateTwo);
ReactDOM.render(templateTwo,appRoot);

};

renderCounterApp();
/*var template = React.createElement("h1", {
    id: "app"
  }, "This is jsx from app.js, NEW ");*/