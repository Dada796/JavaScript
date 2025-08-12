// CONDITIONAL STATEMENT
console.log("conditional statement");
// if(condition){
// action
// lines of code
// }
if (1 < 2) {
  console.log("ola");
}

let balance = 6000;
let amount = 2000;

if (balance >= amount) {
  balance -= amount;
  console.log("Transfer successful, balance is " + balance);
}
// determine if the password is long enough ( >= 10)
// improved your logic check if the password contains '#'- good password

const password = "#password1234";
if (password.length >= 10 && password.includes("#")) {
  console.log("password is good enough");
}

const age = 18;
if (age >= 18) {
  console.log("This user is eligible to vote");
}
// if else statement
if (9 > 7) {
  console.log("YES");
} else {
  console.log("NO");
}

if (balance >= amount) {
  balance -= amount;
  console.log("Transfer successful, balance is " + balance);
} else {
  console.log("Insufficient funds");
}

const num = 76;
if (num > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}
const number1 = 2;
if (number1 % 2 == 0) {
  console.log("this number is even");
} else {
  console.log("this number is odd");
}
// multiple else statement
const censusResult = 500;
if (censusResult >= 300) {
  console.log("OVER POPULATED");
} else if (censusResult <= 50) {
  console.log("UNDER POPULATED");
} else {
  console.log("BALANCED POPULATION");
}
// LOTTERY SYSTEM FOR A COMPANY 4 CHOICES a b c(winner) d
const usersChoice = "a";
if (usersChoice === "c") {
  console.log("Congratulations, you are amazing");
} else {
  console.log("Try Again");
}

// LOTTERY SYSTEM FOR A COMPANY 4 CHOICES a(car) b(try again) c(winner) d(blender)
const usersChoiceB = "a";
if (usersChoiceB === "a") {
  console.log("CAR");
} else if (usersChoiceB === "c") {
  console.log("WINNER");
} else if (usersChoiceB === "d") {
  console.log("BLENDER");
} else {
  console.log("TRY AGAIN");
}
