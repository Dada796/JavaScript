let teama = 96 + 108 + 89;
let teamb = 88 + 91 + 110;
let teamaAverage = teama / 3;
let teambAverage = teamb / 3;

console.log(teamaAverage);
console.log(teambAverage);
if (teamaAverage > teambAverage) {
  console.log(`team A has a higher average score ${teamaAverage}`);
} else if (teambAverage > teamaAverage) {
  console.log(`team B has a higher average score ${teambAverage}`);
} else {
  console.log("it is a draw");
}
let item1 = 120;
let item2 = 80;
let item3 = 150;
let totalCost = item1 + item2 + item3;
let accBalance = 400;

accBalance >= totalCost
  ? console.log("You can checkout")
  : console.log("Insufficient Funds");
let ageRating = 18;
let age = 22;
age >= ageRating
  ? console.log("You can watch the movie")
  : console.log("You are not old enough to watch this movie");

let ticPrice = 150;
let disAmount = 30;
let userBal = 120;
let fanMember = false;
let disPrice = ticPrice - disAmount;
fanMember ? console.log(disPrice) : console.log(ticPrice);
fanMember && userBal >= disPrice || !fanMember && userBal >= ticPrice
  ? console.log("You can buy the football ticket")
  : console.log("You do not enough money for the football ticket");

let jacketPrice = 250;
let discountAmount = 50;
let userBal2 = 300;
let holidaySale = false;
let disPrice2 = jacketPrice - discountAmount;
userBal2 >= jacketPrice || userBal2 >= disPrice2
  ? console.log("you can buy the jacket")
  : console.log("you do not have enough money to buy the jacket");
let minAge = 16;
let stuAge = 23;
stuAge >= minAge
  ? console.log("You are eligible for a driving licence")
  : console.log("You are not eligible for a driving licence yet");
