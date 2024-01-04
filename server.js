const express = require('express');
const app = express();

const path = require("path")
// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.static("public"))
// Define a route to render your EJS file
app.get('/', (req, res) => {
  res.render('index'); 
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});