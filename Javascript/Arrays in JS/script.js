// Create Array
// let marks = [87, 78, 98, 95, 99];
// console.log(marks)
// console.log(marks.length)// here is the length

// create string  array and print using loop
// let name = ["abu", "rahat", "barbhuiya"];
// for(let ind = 0; ind < name.length; ind++){
//     console.log(name[ind]);
// }

// let names = ["abu", "rahat", "barbhuiya"];
// for(name of names){
//     console.log(name);
// }

// let students = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   sum = sum + students[i];
// }
// sum = sum / students.length;
// console.log(sum);

// Give the discount 10% in shopping offer
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items){
//     console.log(`${i}st value of items = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(items[i])
//     i++;

// }

// we are using the for loop
// let items = [250, 645, 300, 900, 50];
// for(let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;

// }
// console.log(items);

// we are using push and pop method
// let fooditems = ["onion", "carrot", "potato", "tomato", "radish"];
// console.log(fooditems);
// fooditems.push("maggi");
// console.log(fooditems);
// fooditems.pop();
// let deleteditems = fooditems.pop();
// console.log(fooditems);
// console.log(deleteditems);

// used below toString() method
// let fooditems = ["onion", "carrot", "potato", "tomato", "radish"];
// console.log(fooditems.toString());

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log("Before adding the methods",arr);
// arr.push("flipkart");
// console.log("after adding the methods",arr);
// let del = arr.pop();
// console.log("after adding the methods",arr);
// console.log(del);

// converts array to strings
// let arr = [2,3,6,7,8,9];
// console.log(arr);
// console.log("before method",arr)
// let newr = arr.toString();
// console.log("after method of toString",newr);
// // tostring does not change the original array it create another copy of the array
// // console.log(arr.toString);

// Now we are using the concat method
// let arr1 = ["Abu", "Rahat"];
// let arr2 = ["Barbhuiya"];
// let arr3 = ["iam a software engineer"];
// console.log("before using the method of concat of 1st array",arr1);
// console.log("2nd term of the array",arr2);
// // Now iam using the concat method
// let mergedarr = arr1.concat(arr2, arr3);
// console.log(mergedarr);
// Now iam using the unshift() & shift method()
// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// arr.unshift("swiggy");
// console.log("it changes the original arrays",arr);
// console.log(_unft); it shows the size of the var if i store in the new variables
// console.log(arr)
// let _shif = arr.shift();
// console.log("using the unshift method",arr)
// console.log(_shif)

// let take example with marbles heroes

// let marble_heros = ["thor", "spiderman", "Ironman", "Antman", "dr.strange"];
// console.log("before using the methods",marble_heros);
// let newmarble = marble_heros.slice(0,4);
// console.log(newmarble);

// let numbr = [1,2,3,4,5,6,7,8,9];
// console.log("before using the methods",numbr);
// numbr.splice(0,3,101,102);
// console.log(numbr)

