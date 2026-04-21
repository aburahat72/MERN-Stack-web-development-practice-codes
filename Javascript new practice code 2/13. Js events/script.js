let btn = document.querySelector(".btn");
btn.addEventListener("dblclick", () => {
  let divs = document.body.childNodes[1].childNodes[1].childNodes[1];
  divs.innerText = "iam the rahatr";
});

btn.addEventListener("keydown", (e) => {
  console.log(e);
  
});
