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
let userBal = 200;
let fanMember = true;
let disPrice = ticPrice - disAmount
fanMember ? console.log(disPrice) : console.log(ticPrice);
userBal >= ticPrice || userBal >= disPrice
  ? console.log("You can buy the football ticket")
  : console.log("You do not enough money for the football ticket");
