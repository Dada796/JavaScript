//MATH OBJECT
//Math
//constant PI
console.log(MessagePort.PI);
//methods
//pow, min, max, round, ceil, floor, trunc, random

//power

console.log(Math.pow(3, 2)); // exponential
console.log(Math.min(23, 4, 2, -98)); //minimum num of a set
console.log(Math.max(-23, -4, -2, -98)); //maximum

// round, ceil, floor, trunc, random
console.log(Math.round(7.55)); // normal rounding of nums
console.log(Math.ceil(91.2)); //round up
console.log(Math.floor(9.99)); //round down
console.log(Math.trunc(10.23)); // removes the dp

//random - generate random pseudorandom nums btw 0-1
console.log(Math.random());
//0-10
console.log(Math.trunc(Math.random() * 11));
console.log(Math.trunc(Math.random() * 20) + 1);
//0-5
const customer = ["Ola", "Blessing", "Pius", "Moshood", "Season", "Samuel"];
const randomLuckyNumber = Math.floor(Math.random() * customer.length);
console.log(customer[randomLuckyNumber]);
// 5-10
//10-20
// 20-50
//0-5 --> 5-10 0-20
// 10-20
const min = 5;
const max = 10;
const rNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rNum);
