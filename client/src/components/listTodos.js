import React, {useEffect, useState} from 'react';
import EditTodo from './editTodo';

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    // Gets the list of all todos and calls the setState function: setTodos to set the state of todos.
    const getTodos = async() => {
        try 
        {
            const response = await fetch('http://localhost:3001/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        } 
        catch (error) 
        {
            console.error(error.message);
        }
    }

    // Takes the todo_id of todo item and sends a delete request.
    const deleteTodo = async(id) => {
        try 
        {
            const deleteTodo = await fetch(`http://localhost:3001/todos/${id}`, {method : 'DELETE'});
            // To update our list without refeshing the page, we can update our todo state to filter out the todo with the deleted id.
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } 
        catch (error) 
        {
            console.error(error.message);
        }
    }


    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            {/* Got the following table from w3 school bootstrap 4 table templates*/}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody> 
                    { todos.map(todo => (
                        <tr key = {todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo}/>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>
                                    Delete
                                </button>
                            </td>
                        </tr> 
                    ))} 
                </tbody>
            </table>
        </>
    )
}

export default ListTodos;