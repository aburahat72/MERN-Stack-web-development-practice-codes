let a = [2, 3, 4, 56, 78, 22];
// let newArr = [];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newArr.push(element ** 2);
//     // console.log(element);
// }
// console.log(newArr);
// Instead of the upper portion we use map
// newArr = a.map((e)=>{
//     return e ** 2;
// });
// console.log(newArr);
// let greaterthannum = ((e)=> {
//     if(e > 7) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(a.filter(greaterthannum));
let newArr = a.filter((e) => {
  if (e > 7) {
    return true;
  } else {
    return false;
  }
});
console.log(newArr);

// both the methods we can 
// we can an make alter function to passed in filter methods
// we can directly make and used function in the filter() methods 

// now we are usiing the reduce methods
let arr2 = [1,2,3,4,5,6,7,8,9];
const red = ((a, b)=>{
    return a + b;

})
console.log(arr2.reduce(red));
// reduce make only one values we have aq to the instruction +,-,*
