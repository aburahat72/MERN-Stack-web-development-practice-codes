console.log("this is promises");
let prom1 = new Promise((resolve, reject) => {
  let e = Math.random();
  if (e < 0.5) {
    reject("No random number not supporting youy system");
  } else {
    setInterval(() => {
      console.log("abu rahat software engineer");
      resolve("rahat");
    }, 1000);
  }
});

// let prom2 = new Promise((resolve, reject) => {
//   let e = Math.random();
//   if (e < 0.5) {
//     reject("No random number not supporting youy system2");
//   } else {
//     setInterval(() => {
//       console.log("abu rahat software engineer2");
//       resolve("rahat2");
//     }, 1000);
//   }
// });
prom1.then((e) => {
  console.log(e);
}).catch((err)=>{
    console.log(err)
});
