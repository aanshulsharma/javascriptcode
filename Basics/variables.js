let Name = 'Sharma ji ';
const accountId =  7987987;
let accountEmail = "anshul@gmail.com";
var password = "12345";
accountCity = "Gurugram" 

// accountId = "Gurugram" // not allowed 
Name = "Shobhit"
accountEmail = "as@as.com"
password="12321324" 
accountCity = "Mumbai "


//in initial days of js it doesn't have any control over block scope
// so when any one try to change the value of any variable with var keyword it automatically changes the value at all places.
/*
not to use var because of issues in block and functional scope
if in js we declare a variable without giving any value then it outputs as undefined
*/ 



// console.log(Name);
console.table([accountEmail,accountId,accountCity,Name,password]); 