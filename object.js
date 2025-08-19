//objects - {keys: value}
// desciptive, Unstructured
// can take any data type
//object methods - function declaration written by the dev(myself) inside of an object
const person = {
  name: "john doe",
  age: 42,
  complexion: "Dark",
  isMarried: true,
  friends: ["Jane", "Peter", "Susan"],
  description: function () {
    return `My name is ${this.name}, and i am ${this.age} years old`;
  },
  maritalSummary: function () {
    return `${this.name} ${this.isMarried ? "is" : "is not"} married`;
  },
};
console.log(person);
//get properties from object, dot notation, bracket notation
//dot notation objectName.property.Name
console.log(person.name);
console.log(person.friends);
console.log(person["friends"]);
console.log(person["age"]);

console.log(person.friends[1]);
//add new properties to an object
// height
person.height = `6'1`;
person.gender = "Male";
person["hobby"] = "Swimming";
//remove  properties 'delete'
delete person.complexion;
console.log(person);
//nested objects
// id, personalInfo, contact info, accountInfo
const customer = {
  id: "Cust-1",
  personalInfo: {
    firstName: "Peter",
    lastName: "pan",
    gender: "Male",
    dateOfBirth: "1990-06-12",
    nationality: "Nigerian",
  },
  contactInfo: {
    email: "peterpan@google.com",
    phone: "+2348121545560",
    address: {
      street: "12, Bode Thomas",
      city: "Lagos",
      postalCode: "10001",
    },
  },
  accountInfo: {
    cardType: "Visa",
    accountNumber: "0123456798",
    accountType: "Savings",
  },
  greeting: function () {
    return `Hello ${this.personalInfo.firstName}, Welcome Back`;
  },
  getAdress: function () {
    return `${this.personalInfo.firstName} lives at ${this.contactInfo.address.street} street, ${this.contactInfo.address.city} `;
  },
};
console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.address.street);
console.log(customer.greeting());
console.log(customer.getAdress());

//adding bank name to the account info
customer.accountInfo.bankName = "GTBank";
//object methods - function declaration written by the dev(myself) inside of an object
//complex data structure
//object destructuring
const book = {
  title: "Purple Hibiscus",
  author: "Chimamanda Ngozi Adichie",
  yearPublished: 2003,
  theme: ["Family", "Religion", "Freedom"],
  settings: {
    country: "Nigeria",
    cities: ["Enugu", "Nsukka"],
    timePeriod: "Postcolonial Nigeria",
  },
};
const { title, yearPublished, theme, settings:{country} } = book;
console.log(title, yearPublished, theme, country);
