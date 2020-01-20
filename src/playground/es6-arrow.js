/*const square = function(x){
    return x*x;
};

function squar2(x){
    return x*x;
};

const squareArrow = (x) => {
    return x*x;
};
const squareArro2 = (x) => x*x;
console.log(squar2(3));
console.log(squareArrow(5));
console.log(squareArro2(7));*/

const getFirstName = function(fullName){
    return fullName.split(' ')[0];
};
console.log(getFirstName('Paula Santana'));

const getFirstNameArr = (fullName) =>{
    return  fullName.split(' ')[0];
};
console.log(getFirstNameArr('PAtita Santana'));

const getFirstNameArr2 = (fullName) => (fullName.split(' ')[0]);
console.log(getFirstNameArr2('Thiago Santana'));