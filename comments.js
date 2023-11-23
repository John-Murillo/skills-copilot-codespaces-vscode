// Create web server and listen for requests
// 1. Import express
const express = require("express");
// 2. Create an express application
const app = express();
// 3. Create a port variable
const port = 3000;
// 4. Create a route for GET request
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// 5. Listen on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

