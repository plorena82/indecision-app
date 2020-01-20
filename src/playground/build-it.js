const app = {
    //title: 'Build it Visible',
    subtitle: ' Visibility toggle',
    details: ['Here are my details','Continue trying','Dont give up','try try try','Let´s sing '],
    detailsMessage:['Show details','Hide Details']
};

let hideDetailsLabel = 0;
let detailShown='';

const onShowHideDetails = ()=>{
    if(hideDetailsLabel == 1){
        //hide message 
        detailShown ='';
        hideDetailsLabel = 0;
    }
    else{ 
        //show a random detail message 
        const randomNum= Math.floor(Math.random() * app.details.length);
        detailShown= app.details[randomNum];
        hideDetailsLabel = 1;
    }
    render();
};

const render = () => {
   const template = (
    <div>
             <h1> {app.subtitle}</h1>
             <button onClick={onShowHideDetails}>{app.detailsMessage[hideDetailsLabel]}</button>
             {<p>{detailShown}</p>}
    </div>
   );
   ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
render();