const express = require('express');
const app = express();

const cors = require('cors')
const pool = require('./db');

/**** MIDDLEWARE ****/
app.use(cors());
app.use(express.json()); // Used to parse incoming HTTP POST requests with JSON payloads.


/**** ROUTES ****/

// Create a todo
app.post(
    '/todos', 
    async(req, res) => {
        try 
        {
            const { description } = req.body;
            const new_todo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);
            return res.json(new_todo.rows[0]);
        } 
        catch (error) 
        {
            console.error(error.message);
            return res.status(500).json("POST /todos: Server Error");
        }
    }
)

// Get all todos
app.get(
    '/todos', 
    async(req, res) => {
        try 
        {
            const all_todos = await pool.query('SELECT * FROM todo');
            return res.json(all_todos.rows);
        } 
        catch (error) 
        {
            console.error(error.message);
            return res.status(500).json("GET /todos: Server Error");
        }
    }
)

// Get a todo
app.get(
    '/todos/:id', 
    async(req, res) => {
        try 
        {
            const { id } = req.params;
            const get_todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
            return res.json(get_todo.rows[0]);
        } 
        catch (error) 
        {
            console.error(error.message);
            return res.status(500).json("GET /todos:id - Server Error");
        }
    }
)

// Update a todo
app.put(
    '/todos/:id', 
    async(req, res) => {
        try 
        {
            const { description } = req.body;
            const { id } = req.params;
            const update_todo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);

            res.json("Todo was updated!");
        } 
        catch (error) 
        {
            console.error(error.message);
            return res.status(500).json("PUT /todos: Server Error");
        }
    }
)

// Delete a todo
app.delete(
    '/todos/:id', 
    async(req, res) => {
        try
        {
            const { id } = req.params;
            const delete_todo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
            res.json("Todo was deleted");
        }
        catch (error)
        {
            console.error(error.message);
            return res.status(500).json("DELETE /todos: Server Error");
        }
    }
)

app.listen(3001, () => console.log("Server has started on port 3001"));