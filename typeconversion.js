// TYPE CONVERSION =converting a data type to another data type
// const first = prompt("Enter First Number");
// const second = prompt("Enter Second Number");
// const total = first + second;
// console.log(first, second);
// console.log(total);

//convert from a string to a number with parseInt, Number only possible with numbers in a string
const mystr = "92";
console.log(typeof mystr);

//const converted = parseInt(mystr):
const converted = Number(mystr);
console.log(typeof converted);

//converting number to strings
const myNum = 76;
console.log(typeof myNum);

//String
const converted2 = String(myNum);
console.log(typeof converted2);

const first = "20";
const second = "25";
const total = parseInt(first) + Number(second);
console.log(total);
//TYPE COERCION (force)
const a = "5";
const b = "3";
console.log(a + b); //concatenation because it is a string
console.log(a - b);
console.log(a / b);
console.log(a * 3);
console.log(a - b -b + b * 2);

//NaN-- NOT A NUMBER



