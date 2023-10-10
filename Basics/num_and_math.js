const score = 400
console.log(score);

console.log(typeof(score));
//this gives us number as type if we check type of variable

//here we are specifying that anyhting in the variable should be number only although we can change it and make this number type to string
const balance = new Number(100)
console.log(balance);

//like this we can change the type also 
console.log(balance.toString());

//if we want number should be display only two decimal we can use fixed method

console.log(balance.toFixed(2));


// when we know exactly what value will come before precision  basically yeh roundoff karne ke liye use hota hai
const OtherNumber = 23.8955
console.log(OtherNumber.toPrecision(4));

//agar hume values jo hai vo indain number system ke hisab se chaiye toh usko hum convert kr sakte hai localeString() mein
//Sometimes its not easy to read zeros to make the representation easy we can use localeString() method to make it Readable

const hundreds = 1000000
console.log(hundreds.toLocaleString());

//so it give commas and they are usually in US Standard to make it in INDIAN Standard we use
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++ MATH +++++++++++++++++++++
console.log(Math)
//math is an object in itself

//-ve values +ve mein jati hai yehi absolute hota hai agar -ve dete hai toh +ve ho jat hai but +ve mein hai to -ve nahi hot hai
console.log(Math.abs(-50));

//round() method works as usual justt like if 4.4 it gives 4 or 4.5 it gives 5 only
console.log(Math.round(4.5));

//ceil means if value is just more then 5 ex 5.1 or 5.4 or 5.9 it gives ouput as 6 only because it takes only upper values
console.log(Math.ceil(5.1));

//floor means if value is just more then 5 ex 5.1 or 5.4 or 5.9 it gives ouput as 5 only because it takes only lower or floor values
console.log(Math.floor(6.9));

//this is the square root method
console.log(Math.sqrt(100));

// for finding out min value we use this min() method
console.log(Math.min(4,5,6,8,9,5,));

// for finding out max value we use this max() method
console.log(Math.max(4,5,6,8,9,5,));

// if we use random() method then it will always give value in between 0-1 only
console.log(Math.random());

//we have one more catch here if we want value to be shifted by 1 then we use 
console.log(Math.random()*10);

//but in the above case the value could be zero if we use floor for removing that we can add 1 this will ensure us that value will never go below 1
console.log(Math.random()*10 + 1);

//for making it error free like if it follows BODMAS rule we use this
console.log((Math.random()*10) + 1);

// here if we use ceil with random then it always gives the value larger basically it rounds off to larger value
console.log(Math.ceil(Math.random()*10) + 1);

// here if we use floor with random then it always gives the value smaller basically it rounds off to lowest value
console.log(Math.floor(Math.random()*10) + 1);

//we can see the value is going beyond 0-9 to remove that we use this formula

// humne Math.random() ka toh use kara hi but 10 se multiply nah krke usee (max-min+1) se multiply kr diya taki range aa jaye jiske becch mein mujhe number chaiye + 1 add kr diya jis se ki zero vala case avoid ho jaye
// or min is liye add kiya kyuki jis se yeh fix ho jaye ki minimum toh itna chaiye hi
const min = 10
const max = 20
(Math.random() * 10 ( max - min + 1) + min)