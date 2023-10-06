
const name = "anshul"     //behind the scene yeh bhi object ko hi invoke kr raha hai koi jayda difference nahi hai

const repoCount = 3

//here we learn how to concatinate strings lets see

console.log(name + repoCount + "Value");

//but the syntax is not a best practice because it is a outdated

/* Here we now use string interpolation which is a feature that allows injecting variables, function calls, arithmetic expressions directly into a string */ 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

function stringg(name,repoCount)
{
    return `My name is ${name} and my repo count is ${repoCount}`;
}

console.log(stringg("Anshul","30"));

/* We have another way also to declare a string and it is explain below */
// when we use new keyword then we use object of js



//yaha pr humne name diya string ke object ko gameName and String ka use krke uske ke constructor ke andar name diya
const gameName = new String('anshulsh')

// this is the key string is always in the key value pairs
console.log(gameName[3]);
console.log(gameName.length);

//now we see how to use prototype methods in java just like length we can use prototype methods
console.log(gameName.toUpperCase());
// thsi is output like this ANSHULSH but this doesn't change your original string

//this can tell us in that index which character is 
console.log(gameName.charAt([2]));

//this can tell us character's index postion
console.log(gameName.indexOf('s'));


//now we learn how to slice a method in javascript

const NewString = gameName.substring(0,5)
console.log(NewString);

//on the compling of this method substring it will never give output of the last index



//now we learn about slice method.

const anotherString = gameName.slice();