const express = require('express');
const app = express();

const cors = require('cors')
const pool = require('./db');

/**** MIDDLEWARE ****/
app.use(cors());
app.use(express.json()); // Used to parse incoming HTTP POST requests with JSON payloads.


/**** ROUTES ****/

// Create a todo
app.post('/todos', async(req, res) => {
    try 
    {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);

        res.json(newTodo);
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