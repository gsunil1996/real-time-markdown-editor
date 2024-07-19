const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const markdownRoutes = require("./routes/markdownRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use(markdownRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
