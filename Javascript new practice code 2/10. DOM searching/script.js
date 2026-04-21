// console.log("Rahat");
// it is used for ID
// let boxes = document.getElementById("box1");
// boxes.style.backgroundColor = "green";

// it is used for class
let boxes = document.getElementsByClassName("box");
// console.dir(boxes);

for (const i of boxes) {
  i.style.backgroundColor = "green";
}
// if we use the class name we have use loop for multiple items  & no loops required for the id

// Now we will use query selector
let box1 = document.querySelectorAll(".box1");
//  box1.style.backgroundColor = "red";// it is for only one first elememnt
for (const i of box1) {
  i.style.backgroundColor = "red";
}
// we can as a id = #id
