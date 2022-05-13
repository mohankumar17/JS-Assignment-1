//Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

/* Without Arrow Function */
function add(num1,num2){
    return num1+num2;
};

function performOperation(add){
    console.log(add(10,13));
}

performOperation(add);


/* Using Arrow Function */

const sum = ((num1,num2)=>{
    return num1+num2;
});

sum(10,13);

/* An arrow function takes two arguments firstName and lastName and returns a 2 letter 
string that represents the first letter of both the arguments. For the arguments
 Roger and Waters, the function returns ‘RW’. Write this function. */

const firstLetterString = ((firstName, lastName)=>{
    return firstName[0]+lastName[0];
}) 

firstLetterString("Roger","Waters");