const express = require("express");
const app = express();
const port = 3000;

//ejs with express
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    //Assume that it comes from the databases
    // these two values comes from the database and we want to use it in our index.html file or templates
    let siteName = "adidas"
    let searchText = "search Now"

  res.render("index", { siteName:siteName, searchText:searchText });
});


app.get("/blog/:slug", (req, res) => {
    //Assume that it comes from the databases
    // these two values comes from the database and we want to use it in our index.html file or templates
    let blogTitle = "This is the title of the blog"
    let blogContent = "This is the good brand"
    
    //Here we want to store the variables into the template using ejs rendering engine
    // Here we use the ejs 
  res.render("blog", { blogTitle, blogContent });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
