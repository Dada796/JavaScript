//JS FUNCTION
//reusable blocks of code that perform a specific task or return a value
// call or invoke the function

//a function that welcomes our user when they log in
function welcomeUser() {
  console.log("Welcome User");
}
welcomeUser();
welcomeUser();
//functions with parameters - values that are passed to functions
function welcomeUser2(user) {
  console.log(`welcome ${user}`);
}
welcomeUser2("Season");
welcomeUser2("Daniel");
//default parameter
function welcomeUser3(user = "anon") {
  console.log(`welcome ${user}`);
}
welcomeUser3();
//function returning a value- giving back a result
//return keyword

//function that return yhe addition of two numbers
function add(a, b) {
  return a + b;
}
let sum = add(10, 12);
console.log(sum);
//function that returns the products of 2 number
function product(num1, num2) {
  return num1 * num2;
}
console.log(product(67, 3));
//function that returns the naira equivalent of a dollar amount passed into it
// 10 dollares will give you (10 * 1600) naira
//1$ =1600
function convertToNaira(dollarAmount) {
  return `${dollarAmount} dollars will give you ${dollarAmount * 1600} naira`;
}
console.log(convertToNaira(22));
console.log(convertToNaira(1500));
//write a function that return the average of 3 numbers
function calcAverage(n1, n2, n3) {
  const avg = (n1 + n2 + n3) / 3;
  return avg;
}
console.log(calcAverage(3, 5, 7));
function calcAge(YOB) {
  return `${YOB} should be ${2025 - YOB} this year`;
}
console.log(calcAge(2002));

function oddOrEven(num) {
  if (num % 2 === 0) {
    return `${num} is EVEN`;
  } else {
    return `${num} is ODD`;
  }
}
console.log(oddOrEven(90));
console.log(oddOrEven(71));

let balance = 2000;
function withdrawAmount(amount) {
  if (balance >= amount) {
    balance -= amount;
    return "Transfer Successful";
  } else {
    return "Insufficient Funds";
  }
}
console.log(withdrawAmount(1800));
console.log(balance);
console.log(withdrawAmount(1000));

function depositAmount(amount) {
  balance += amount;
  return balance;
}
console.log(depositAmount(2000));
//RETURN KEYWORD
//anycode after return is inaccesible code
function example() {
  console.log("okay after return");
  return "hello";
}
example();
function name(word) {
  return word.charAt(0);
}
console.log(name("john"));

function fullName(first, second) {
  return first + " " + second;
}

console.log(fullName("dada", "samuel"));
function longestString(word1, word2) {
  if (word1.length > word2.length) {
    return `${word1} has the longest string`;
  } else if (word2.length > word1.length) {
    return `${word2} has the longest string`;
  } else {
    return "equal length";
  }
}

console.log(longestString("laptop", "phone"));
//function declaration
function sayHello() {
  return "Hello";
}
//function expression, treats function like variable
// function expression that returns the square of a number
const squareNumber = function (num) {
  return num ** 2;
};
console.log(squareNumber(7));
//function expression that converts number of days to weeks 21
const daysToWeeks = function (days) {
  return days / 7;
};
//arrow function
//arrow function that returns the difference between two functions
const difference1 = (n1, n2) => {
  return n1 - n2;
};
//shorten arrow function (only a line inside of the block of code)\
const difference2 = (n1, n2) => n1 - n2;
console.log(difference2(9, 6));

//HOISTING - behaviour in Js where function declarations are moved to the top
// before the code is executed
hoistedFunc();
function hoistedFunc() {
  console.log("I am a func declaration");
}
const getMaxNum = (m1, m2) => {
  if (m2 > m1) {
    return m2;
  } else if (m1 > m2) {
    return m1;
  } else {
    return "none";
  }
};
console.log(getMaxNum(42, 56));
const ArrowFunc = (word) => word.toUpperCase();
console.log(ArrowFunc("cat"));
let savings = 2000;
const checkLoanEligibility = (amount) => {
  if (amount < savings * 2) {
    return "eligible";
  } else {
    return "not eligible";
  }
};
console.log(checkLoanEligibility(1000));
const containSubstring = (str, substr) => str.includes(substr);
console.log(containSubstring("samuel", "sam"));
const convertMinToSec = (min) => min * 60;
console.log(convertMinToSec(2));




