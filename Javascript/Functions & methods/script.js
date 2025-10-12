// function rahat() {
//     console.log("Abu rahat");
//     console.log("Barbhuiya");
// }

// To call the function means invoke the function
// rahat();
// it is used to avoid the redundancy in the codes
// NaN errors refers as it is not a number

// function myfunction(msg){ // parameter -> input
//     console.log(msg);
// }

// myfunction("Iam software engineer"); // Here iam passing the argument
// function sum(a,b) {
// console.log(a + b);
// }
// sum(10,40); // Here i have the argument used the number as for sum

// function sum(a,b) { // function parameter
// the function variable are only defined for scope we cannot access like global variables
// func params --> it is local variables -> block scope of function
// s = a + b;
// return s;
// console.log(s)  // after returning the next statement will not worked
// return is last statement
// }
// let val = sum(4,5);
// console.log("it stores in the new  val",val); // because we have used return

// sum function
// function sum(a, b) {
//   return a + b;
// }

// multiplication func
// function mult(a, b) {
//   return a * b;
// }

// Iam making the arrow function
// const val = (a,b) => {
//     return a * b;
// }
// console.log(val);
// to invoke the function in console
// Val(2,5)

// let printrahat = () => {
//     console.log("Abu rahat");
// }
// printrahat();

// Create a function using the function keyword that takes a string as an argument & returns the numbers of vowels in the string.
// function funcvow() {
//   let vow = ["a", "e", "i", "o", "u"];
//   for (let i in vow) {
//     if (newvalue() === (vow[i])){
//         // console.log(vow[i]);

//     }
//     console.log(i);

//   }
// }

// function newvalue (){
//     let val = "rahat";
//     for(let i of val) {
//         console.log(i);
//     }
// }

// i will try it later

//Create a function using the function keyword that takes a string as an argument & returns the numbers of vowels in the string.

// foreach loop passing argument like parameter in function
//to call the function in console use myfunc(abc);
// function abc () {
//     console.log("hello");
// }

// function myfunc(abc) {
//     return abc;
// }

// let us try the for each function in methods
// let arr = [1,2,3,4,5];
// arr.forEach (function myfun (val){
//     console.log(val);
// });

// Here iam using arrow function in foreach methods
// let str = ["Abu", "rahat", "barbhuiya", "software", "developer"];
// str.forEach((val) =>{
//     console.log(val.toUpperCase());
// });

// For a given array of numbers , print the square of each value using the forEach loop.
// let arr = [1,2,3,4,5];
// arr.forEach((val) =>{
//     console.log(val * val);
// });
// i have maked a function using arrow to print square of the number
// let arr = [1,2,3,4,5];
// let calsqr = (val) => {
//     console.log(val * val);

// }
// here below iam pass the function in methods
// arr.forEach(calsqr)

// Here iam using the map function
// let arr = [1,3,4,5,6,8];
// let newArr = arr.map((val)=>{
// return val * 2;
// });
// it created a new array without chnaging the new array
// console.log(newArr);
// console.log(arr);

// here iam using the filter function
// let arr = [1,2,3,5,6,7,32,40,45];
// let newarr = arr.filter((val) => {
//     return  val % 2 === 0;
// });
// console.log(newarr);

//QS we wre the given array of marks of students filter out of the marks of students that crored 90+
// let arr = [56,70,75,76,79,80,85,90,98,95,93,91];
// let newArr = arr.filter((val) => {
//     return 90 <= val;
// });
// console.log(newArr);

// Take a number n as input from user . create an array of numbers 1 to n;

// let n = prompt("enter the numbers");
// let arr = [];
// for (let i = 1; i < n; i++) {
    // it stores the array in newarr using i
//   arr[i - 1] = i;
// }
// console.log(arr);

// here iam using the reduce methods to calculate the sum of all the numbers
// let arr = [2,3,4,5,6,7];
// let newarr = arr.reduce((res, curr) =>{
//     return res + curr;
// });
// console.log(newarr);
// calculate the product using reduce methods
let arr = [2,3,4,5,6,7];
let newarr = arr.reduce((res, curr) =>{
    return res * curr;
});
console.log(newarr);
