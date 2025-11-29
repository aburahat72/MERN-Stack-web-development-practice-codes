// Qs create a new button element give it a text "click me", background color of red & text color of white

// lets create the new tag in body
let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.background = "red";
btn.style.color = "white";

// lets call the body
let bd = document.querySelector("body")
bd.prepend(btn);
console.log(btn);

// let create the p tag
let para = document.createElement("p");
para.innerHTML = "<div class = tr > Myself Abu rahat, software developer</div>";
// i have created a class using innerHtml and pass it below using the class name .tr given css property below in  


// Now pass to the html document 
let paras = document.querySelector("body");
paras.append(para); // in passing the el we donot use the double quotes
// console.log(paras);

// here iam giving the value of the css to the tr  class
let cls = document.querySelector(".tr");
cls.style.color = "green";

//here iam adding the new class without change the previous class
let content = document.querySelector(".content");
content.classList.add("newclass");

