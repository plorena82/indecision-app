class Person{

    constructor(name = 'Anonymus', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, I am ${this.name}!`;
       // return 'Hi, I am ' + this.name + '!';
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let desc = super.getDescription();
        if(this.hasMajor()){
                desc = desc +` Their major is ${this.major}.`;
        }
        return desc;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    
    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greet = super.getGreeting();
        if(this.hasHomeLocation()){
            greet += ` I am visiting from ${this.homeLocation}`;
        }
        return greet;
    }

}

//const me = new Student('Pat', 37, 'system engineer');
//const other = new Student();

const me = new Traveler('Pat',37,'Van');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());