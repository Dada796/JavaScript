//DOM -document object model
// access elements on the page, change content, add or remove elements dynamically
// responds to users interaction

//ACCESS ? GET ELEMENTS ON THE PAGE
//getelementbyid, getbytagName(h1, p), getelementbyClassnames
//const heading = document.getbyElementsByTagName("h1")
//console.log(heading);

// const heading = document.getElementById("hello")
// console.log(heading);

// const paragraph = document.getElementsByClassName("para1")
// console.log(paragraph);
// console.log(paragraph[0]);
// querySelector(first element), querySelectorAll(all elements that fits the selector)
// uses css selector .classNames #idName div .error
// const para = document.querySelector(".para1");
// const paras = document.querySelectorAll(".para1");

// CHANGING CONTENT WITH JS

const topic = document.querySelector("#hello");
topic.textContent += ", js is fun";

const para = document.querySelector(".para1");
para.textContent = "hello dom practice";

const myDiv = document.querySelector("div");
// myDiv.innerHTML += "<p>p from js</p>";
const username = "John";
myDiv.innerHTML = `<h1>Welcome ${username}</h1>`;

// change attributes class, id...
const beginPara = document.querySelector(".begin");
beginPara.id = "okay";
beginPara.className = "good";
beginPara.style.color = "green";
beginPara.style.backgroundColor = "purple";

// interact with styles (classnames)
const msgHeading = document.querySelector(".msg");
//classname (totally overide)
// msgHeading.className = "success"
// classlist (add remove contain)
msgHeading.classList.add("success");
msgHeading.classList.remove("msg");
console.log(msgHeading.classList.contains("msg"));

//create dom element
const section = document.createElement("section");
section.innerHTML = "<h1>Created from Js</h1> <p>hello here</p>";

const body = document.querySelector("body");
body.appendChild(section);

const form = document.createElement("form");
form.innerHTML = `<input type="text" placeholder="username"> 
<input type="password" placeholder="password"> <button>Login</button>`;
body.appendChild(form);
const link = document.createElement("a");
link.textContent = "Visit Facebook";
link.href = "https://facebook.com";

const nav = document.querySelector("nav");
nav.appendChild(link);

// responding to users interaction(click, submit, typing)
//event-(event loistener) event handler
const btn = document.querySelector("button");
// log user clicked
btn.addEventListener("click", () => {
  console.log("user clicked");
  body.style.backgroundColor = "blue";
});
const btn1 = document.querySelector(".textbtn");
const desc = document.querySelector(".desc");
btn1.addEventListener("click", () => {
  console.log("user clicked");
  desc.style.display = "none";
});
// form handling -> submit(do sth)
//1. prevent the default behaviour of the form
//2. get the users input (.value)

const myform = document.querySelector("form");
const usernameInput = document.querySelector("input");
const smallError = document.querySelector("small");
usernameInput.addEventListener("input", () => {
  const usernameValue = usernameInput.value;
  if (usernameValue.trim().length < 5) {
    smallError.textContent = "Min username length is 5";
    // usernameInput.style.border = '2px solid red'
    usernameInput.className ="error"
  } else {
    smallError.textContent = "";
    //  usernameInput.style.border = ""
     usernameInput.className = "";
  }
});
myform.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameValue = usernameInput.value;
  if (!usernameValue.trim()) {
    smallError.textContent = "please provide a username";
  } else {
    console.log("form submitted", username);
    smallError.textContent = "";
  }
});
