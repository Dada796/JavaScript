// Asynchronous JS
// non-blocking code
console.log("A");
setTimeout(() => {
  console.log("B");
}, 5000);
console.log("c");
// a c b
// fetch DATA from an external source
// API - application programming interface

const url = "https://jsonplaceholder.typicode.com/users";
// callbacks (.then) async/await
// PROMISES - pending fulfilled()
//json - javascript object notation
const fetchUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log();
  }
};
fetchUsers();

const productUrl = "https://fakestoreapi.com/products";
const fetchProducts = async () => {
  try {
    const response = await fetch(productUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchProducts();
