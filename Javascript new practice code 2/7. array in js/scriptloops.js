// let a = [16, 27, 384, 57, 68, 79, 91];
// // console.log(arr);
// a.forEach((value, index, arr)=>{
//     console.log(value, index,arr);
// })
// for (const key in a) {
//   if (!Object.hasOwn(a, key)) continue;

//   const element = a[key];
//   console.log(element);
// }
let obj = {
  a: 3,
  b: 6,
  c: 9,
};
for (const key in obj) {
  if (!Object.hasOwn(obj, key)) continue;

  const element = obj[key];
  //   console.log(key,element);
  console.log(`${key} = ${element}`);
}
// in upper code we have used for in loops to print the element object key means names
