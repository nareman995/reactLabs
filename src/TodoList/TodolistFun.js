import { useState } from "react";

function TodolistFun()
{
    const [input,setinput]=useState("");
    const [Todolist,setTodolist]=useState([]);
    const [Completedtasks,setCompleted]=useState([]);

    const handle_submit=(e)=>
    {
        setTodolist((prev) => [
            ...prev,
            Todolist.push(input)]);
        console.log(Todolist)
    }
    return(
        <div>
     <input type="text" placeholder="What should be done?" value={input} onChange={(e)=>{setinput(e.target.value)}}></input>
     <button type="submit" onClick={handle_submit}>Add Task</button>
     <ul>

     </ul>
     </div>
    )
}
export default TodolistFun;