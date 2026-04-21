// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(101);
//     }, 3000);
//   });
// }

//here to start async func using get data
// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(101);
//     }, 1000);
//   });
// }

// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(101);
//     }, 1000);
//   });
// }

// let getting the data from the server
// async function getData() {
//   let x = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
//   let data = await x.json();
//   console.log(data);
// }

// here iam making the promise using the async function
// let getting the data from the server
async function getData() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  // calling the data from the server
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json(); // here data is parsing
  // console.log(data);
  return data;
}

getData();

async function main() {
  // if we want to use await function we have wrap the statement into the main function
  console.log("loading modules");
  console.log("Do something else");
  console.log("load data");
  // if i not use await they will directly give me the promise not any data 
  let data =  await getData(); // if we use async function the await in program will wait until the time end or response from server
  console.log(data);
  console.log("process- data");
  console.log("task 2");
}
main();

// data.then((v) => {
// console.log("process- data");
// console.log("task 2");
//   console.log("task3");
// });
// do not used then methods instead of async function await
