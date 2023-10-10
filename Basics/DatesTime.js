// Dates

// yaha pr ek object create kr liya, myDate ek instance hai object(Date) ka
let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString());  // by using this we can print only date with day with month in english

console.log(myDate.toISOString());  // by using this we can print only date and Time with month in numeric and Z atlast

console.log(myDate.toJSON());  // same output as above

console.log(myDate.toLocaleDateString());  // by using this we can print only date in DD/MM/YYYY formatt

console.log(myDate.toLocaleString());  // by using this we can print date with time DD/MM/YYYY and in 00:00:00 AM/PM formatt 

console.log(myDate.toLocaleTimeString());  // by using this we can print only time in this 00:00:00 AM/PM formatt 

console.log(myDate.toUTCString());  // by using this we can print date with time in GMT 

console.log(myDate.toTimeString());  // by using this we can print only time and in 00:00:00 GMT+000 formatt 

console.log(typeof myDate);  // by using this we can specify which typeof instance myDate is, it will output as a object

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toDateString()); // it will give us Date with Day but as we use Date object with this syntax (2023,0,23) it indicates that Months in js Starts from 0-11

//if we need date with time then we use Date(2023,0,23,5,3)
let myCreateDate = new Date(2023,0,23,5,3) //yaha single digit mein likhte hai toh count 0 se shuru hota hai array hai toh but agar DD-MM-YYYY se lete hai toh 01 se hi month start hota hai
console.log(myCreateDate.toLocaleString()); 

let myCreatDate = new Date("2023-01-12") //yaha single digit mein likhte hai toh count 0 se shuru hota hai array hai toh but agar DD-MM-YYYY se lete hai toh 01 se hi month start hota hai
console.log(myCreatDate.toLocaleString()); 

//now we learn here how to use timestamp basically it is used in quiz projects or where we need to compare time
let mytimStamp = Date.now()
console.log(mytimStamp);
console.log(myCreatDate.getTime());


//agar humko seconds mein value chaiye toh hum kya krte hai
let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(myCreatDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date() //aise kuch naya nahi mielega ismein bs Date with millsec mil jati hai
console.log(newDate);
console.log(newDate.getMonth()); // it gives us the month number which is starting from 0 
console.log(newDate.getMonth()+1); // it gives us the month number which is starting from 0 but if want that it will start from 1 and gives us the exact month then we use this
console.log(newDate.getDay()); //it gives us the day which is starting from 1


//  newDate.toLocaleString(); this is the most usefull method which we use frequently in future and in this we define whole Object and we can define so many parameter inside this

//if we want to customise the format of day date time so for that we can use this method
newDate.toLocaleString('default',{
    weekday : "long"
});


