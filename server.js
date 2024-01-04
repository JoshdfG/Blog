const express = require('express');
const app = express();

const path = require("path")
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.listen(5000)

app.use(express.static("public"))
// Define a route to render your EJS file
app.get('/', (req, res) => {
  res.render('index', {title:"Home"}); 
});

app.get("/about", (req,res)=>{
  res.render('about', {title:"About"} )
})
app.get("/blogs/create",(req,res)=>{
  res.render("create", {title:"Create a new blog"})
})

app.use((req,res)=>{
  res.status(404).render('404',{title:"404"})
})

