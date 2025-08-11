// STRINGS-text characters in double or single quotes
const firstName = "John";
const lastName = "Doe";
const middleName = "Oluwasegun";

// STRING PROPERTIES
console.log(firstName.length, middleName.length);
// string concatenation- joining of strings (+ a+b)
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// STRING METHODS- built in js functions that works on strings
// toUpperCase, toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// startsWith, endsWith, includes
console.log(fullName.startsWith("J"));
console.log(fullName.endsWith("oe"));
console.log(fullName.includes("n D"));

// REPLACE AND replaceAll
console.log(fullName.replace("o", "#"));
console.log(fullName.replaceAll("o", "#"));

const myEmailAddress = "sdada9757@gmail.com";
console.log(myEmailAddress.length);
console.log(myEmailAddress.toUpperCase());
console.log(myEmailAddress.replace("@", "*"));
console.log(myEmailAddress.includes("m"));
console.log(myEmailAddress.endsWith("google.com"));

// charAt, indexOf, lastIndexOf
// zero based language(assigning position from 0)
console.log(myEmailAddress.charAt(2));
console.log(myEmailAddress.indexOf("a"));
console.log(myEmailAddress.lastIndexOf("a"));

// concat, trim, slice, substring, substr
console.log(fullName.concat(" is my name"));

// trim removes white spaces
const username = "     user001    ";
console.log(username);
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

// Extract portions of a string
const surname = "Brooke";
// slice, substring(start, end(non-inlusive))
console.log(surname.slice(2, 5));
console.log(surname.substring(2, 5));

// substr (start, number of characters)
console.log(surname.substr(2, 2));

// concatenation
const author = "Chinua Achebe";
const bookTitle = "Things Fall Apart";
const yearPublished = 1997;

// Template literals
const summary= `The book ${bookTitle} written by ${author.toUpperCase()} was published in the year ${yearPublished}`

const summary2= `${author} wrote the book ${bookTitle}`
console.log(summary2);

// quote Tinubu said and I quote 'Let the Poor Breathe'
const quote = `Tinubu said and I quote 'Let the Poor Breathe'`;
console.log(quote);
// CLASS WORK
const greeting = "hello world"
console.log(greeting.toUpperCase());

const js = "JAVASCRIPT"
console.log(js.toLowerCase());

const hello = "Hello"
console.log(hello.charAt(0));

const HW = "Hello world"
console.log(HW.slice(6,11));

const myLikes = "i like cats"
console.log(myLikes.replace("cats", "dogs"));

const hail = "Hello world"
console.log(hail.startsWith("Hello"));

const charNum = "sokratis papastathopoulos"
console.log(charNum.length);

const nickName = "Dada"
const favClub = "madrid"

const summary3 = `I am ${nickName} and my favorite club is ${favClub}`
console.log(summary3);








