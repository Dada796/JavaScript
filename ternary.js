//Ternary operators - is another way of writing if else statement
let otpSent = 4587;
let otpEntered = 4578;

if (otpEntered === otpSent) {
  console.log("Transaction Completed");
} else {
  console.log("Wrong OTP, try again");
}

otpEntered === otpSent
  ? console.log("Transaction Completed")
  : console.log("Wrong OTP, try again");

let num = 41;
num % 2 === 0 ? console.log("EVEN NUMBER") : console.log("ODD NUMBER");

let balance = 6000;
let amount = 8000;
balance >= amount
  ? console.log("Transaction Successful")
  : console.log("Insufficient Funds");

  const isMarried = false;
  const statement = `He ${isMarried ? "is" : "is not"} married`;
  console.log(statement);
  
