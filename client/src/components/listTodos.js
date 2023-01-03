import React, {useEffect, useState} from 'react';

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

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

    useEffect(() => { 
        getTodos();
    }, []);

    console.log(todos)

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
                    {
                    todos.map(todo => (
                        <tr>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr> 
                    ))
                    }     
                </tbody>
            </table>
        </>
    )
}

export default ListTodos;