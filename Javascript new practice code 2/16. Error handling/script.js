//Error handling
let a = prompt("Enter the first number");
let b = prompt("Enter second numbetr");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("this is not valid"); // here is error throw method directly see in console to see the red error like js syntax error
  // go to the mdn references ->
}
let sum = parseInt(a) + parseInt(b); // here the parseInt will convert into the Integer
// here iam using the try catch method it will catch and show the error like alert in console
// try catch is only works in sync function not in async function such as settimeout
let x = 1;
function main() {
  try {
    console.log("The sum is = ", sum * x);
    return true;
  } catch (error) {
    console.log("Error a gaya rahat bhi");
    return false;
  } finally {
    console.log("db connection are closed");
  }
}
let bc = main();
// if we use the finally in the try and catch method we have to use in the function such main() function if the try and catch returns the statement as true and false as per js rules the next statement not works but in the finally the next statement will work after the return statement
