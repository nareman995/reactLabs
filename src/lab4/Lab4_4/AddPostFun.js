import React, { useState } from 'react'
import axios from 'axios';
function AddPostFun (){
const [input,setinput]=useState({
id:"",
username:"",
password:""    
}) 

      const  handle_username=(e)=>{  
        setinput(previousState => {
          return { ...previousState, 
              username:e.target.value}})
          }
          const  handle_password=(e)=>{  
            setinput(previousState => {
              return { ...previousState, 
                  email:e.target.value}})
              }
const handle_submit=(e)=>{
e.preventDefault()
axios.post("https://jsonplaceholder.typicode.com/posts",)
.then((response)=>{
    console.log(response)
   }).catch((err)=>{
    console.log(err);
     })

}
    return (
      <div>
        <form onSubmit={handle_submit}>
            <label>ID</label>
         <input type='number' name='id' placeholder='Enter your ID' value={input.id} onChange={(e)=>setinput({id:e.target.value})}></input>
         <label>UserName</label>
         <input type='text' name='username' value={input.username} placeholder='Enter Your Username' onChange={handle_username}></input>
         <label>Password</label>
         <input type='password' name='password' value={input.password} placeholder='Enter Your Password' onChange={handle_password}></input>
        <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
export default AddPostFun;