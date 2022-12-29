const express = require('express');
const cors = require('cors')
const app = express();
const pool = require('./db');

/**** MIDDLEWARE ****/
app.use(cors());
app.use(express.json());


/**** ROUTES ****/

// Create a todo
app.post('/todos', async(req, res) => {
    try 
    {
        console.log(req.body);
    } 
    catch (error) 
    {
        console.error(error.message);
    }
})

// Get all todos

// Get a todo

// Update a todo

// Delete a todo



app.listen(3000, () => {
    console.log("Server has started on port 3000");
});