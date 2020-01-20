
const add = function(a,b){
console.log(arguments);
 return a + b;
};

console.log(add(55,1,100,200,300));


const add2 = (a,b)=>{
   // console.log(arguments); no funciona con arrow functions, not bound
     return a + b;
    };

console.log(add2(55,2,2000,3000));


const user = {
    name:'Pat',
    cities:['BuenosA','Rio','Van'],
    printCitiesLived: function (){
        console.log(this.name);
        console.log(this.cities);

        //if we dont add this line the page fails, as the function inside the foreach takes the 
        //context from the printCitiesLived function where it was created, not from user.
        const that= this;

        this.cities.forEach(function(city){

          console.log(that.name + ' has lived in '+ city);  //for name we need the this context of user
        });
    }
};



const user2 = {
    name:'Pat',
    cities:['BuenosA','Rio','Van'],
    printCitiesLived: function (){ //if we use () => it will tke the context of the parent page, not user2, so it wont work
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach((city) =>{ //arrow function does not bind its own this context, it takes the user2 context

          console.log(this.name + ' has lived in '+ city);  
        });
    }
};

const user3 = {
    name:'Pat',
    cities:['BuenosA','Rio','Van'],
    printCitiesLived(){ //if we use () => here  it will tke the context of the parent page, not user2, so it wont work
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach((city) =>{ //arrow function does not bind its own this context, it takes the user2 context

          console.log(this.name + ' has lived in '+ city);  
        });
    }
};

//USe of MAP
const user4 = {
    name:'Pat',
    cities:['BuenosA','Rio','Van'],
    printCitiesLived(){ 
        console.log(this.name);
      //  console.log(this.cities);
        const citiesMessages= this.cities.map( (city) =>{ //arrow function does not bind its own this context, it takes the user2 context

          return city +' YEAH!! ' + this.name; 
        });
        return citiesMessages;
    }
};

//shorten the sintax 
const user5 = {
    name:'Pat',
    cities:['BuenosA','Rio','Van'],
    printCitiesLived(){ 
        console.log(this.name);
      //  console.log(this.cities);
      return this.cities.map( (city) => city +' YEAH!! ' + this.name );
      
    }
};

//FOR TEST
//console.log(user5.printCitiesLived());

const multiplier ={
 numbers:[1,2,3],
 multiplyBy: 2,
 multiply(){
     return this.numbers.map( (num) => num* this.multiplyBy );
 }
};
console.log(multiplier.multiply());