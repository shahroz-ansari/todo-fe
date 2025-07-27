import React, { useState } from 'react';


function TodoList() {
    let [todos , setTodos] = useState(["SampleTask"]);
    let [newTodo , setNewTodo] = useState("")

    let addNewTask = () => {
        setTodos([...todos,newTodo])
        setNewTodo("");
        
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value)
      

    }

    return ( 
        <div>
        <input placeholder='Add a Task' value={newTodo} onChange={updateTodoValue}></input>
        <br></br>
        <br></br>
        <button onClick={addNewTask}>Submit</button>
        <br></br>
        <br></br>
        <br></br>

        <hr></hr>
        <h4>task todo </h4>
        <ul>
            {
              todos.map((todo) => (
                 <li>{todo}</li>
              ))
            }
        </ul>
        </div>
     );
}

export default TodoList;