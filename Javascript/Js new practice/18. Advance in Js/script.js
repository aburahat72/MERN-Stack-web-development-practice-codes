// Here iam using the IIFE concept
// async function sleep() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(425);
//     }, 1000);
//   });
// }

// let make the function of sum
function sum(a, b, c) {
  return a + b + c;
}

(async function main() {
  //   let a = await sleep();
  //   console.log(a);
  //   let b = await sleep();
  //   console.log(b);

  // Destructuring

  // let [x,y] = [3,5];
  // let [x, y, ...rest] = [1, 2, 5, 7, 80, 9];
  // console.log(x);
  // console.log(y);
  // console.log(rest);

  // we are using the object as the destructuring
  // let obj = {
  //     a:5,
  //     b:6,
  //     c:8
  // }
  // let {a,b} = obj;
  // console.log(a,b);

  // In below i have with a function and without a function and  using the spread operator
  let arr = [2, 3, 6];
  console.log(arr[0] + arr[1] + arr[2]);
  console.log(sum(arr[0], arr[1], arr[2]));
  console.log(sum(...arr));
})();

// let and const are not used as hoisting
// we can called function as a hoisting because the interpreter moves the function to first if we write in last but in use cases of let and const the interoreter will not move to the first of the lines codes execution
