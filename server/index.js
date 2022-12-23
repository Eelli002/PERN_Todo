const express = require("express");
const cors = require("cors")
const app = express();

// Middleware
app.use(cors());

app.use(express.json());

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});