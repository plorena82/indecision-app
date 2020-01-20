console.log("App.js is running!!!!")

const app = {
    title: 'This is my application',
    subtitle: ' Indecision app',
    options: ['One','Two']
};

const template = (
  <div>
    <h1> {app.title}</h1>
    {app.subtitle &&  <p>{app.subtitle}</p>} 
    <p>{(app.options && app.options.length > 0)? 'Here are the options':'No options' }</p>
  </div>
);


const user = {
    name: 'Patricia S',
    age:37,
    location:'Vancouver'
};

function getLocation(location){
    if(location){
        return <p> Location: {location} </p>;
    }

}

//const numbers = [55,101,1000];

const templateTwo = (
    <div>
      <h1> {user.name? user.name + '!!!' : 'Anonymus'}</h1>
       {(user.age && user.age> 18) && <p> Age: {user.age}</p>}
      {getLocation(user.location)}
       {//[10,20,30,40,'Pepito']
      }

      {/* Example of array transform
          numbers.map((number) =>{
              return <p key={number}>Number: {number}</p>;
          })
      */}
    </div>
  );

const appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);


/*var template = React.createElement("h1", {
    id: "app"
  }, "This is jsx from app.js, NEW ");*/