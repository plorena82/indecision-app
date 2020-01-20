console.log("App.js is running!!!!")

const app = {
    title: 'This is my application',
    subtitle: ' Indecision app',
    options: []
};

const onSubmitForm = (e) =>{
    e.preventDefault();
    console.log('Form SUBMITTED');
    const option = e.target.elements.optionF.value;
    if(option){
        app.options.push(option);
        e.target.elements.optionF.value = '';
        renderInit();
    }

    console.log(app.options);
};
const onMakeDecision  = () =>{
 const random = Math.floor(Math.random() * app.options.length );
  const opt = app.options[random];
  alert(opt);
}

const resetAllOptions = () =>{
    if(app.options && app.options.length>0){
        app.options = [];
        renderInit();
    }
};


const renderInit = () =>{
    const template = (
    <div>
        <h1> {app.title}</h1>
        {app.subtitle &&  <p>{app.subtitle}</p>} 
        <p>{(app.options && app.options.length > 0)? 'Here are the options':'No options' }</p>
       { //<p>Options count: {app.options.length}</p>
        }
        <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do</button>
        <button onClick={resetAllOptions}> Remove All</button>
        <ol>
            { app.options.map( (option) =><li key={option}>{option}</li>)
            }
        </ol>
        <form onSubmit={onSubmitForm}>
        <input type='text' name='optionF'/>
        <button> Add option</button>
        </form>
      
    </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderInit();
