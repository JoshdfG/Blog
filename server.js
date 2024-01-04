const express = require('express');
const app = express();

const path = require("path")
// Set EJS as the view engine
app.set('view engine', 'ejs');
// // app.use(express.static('src'));
// app.set("views",path.join(__dirname,"views")); 

app.use(express.static("public"))
// Define a route to render your EJS file
app.get('/', (req, res) => {
  res.render('index'); // Replace 'index' with your EJS file name (without the extension)
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});