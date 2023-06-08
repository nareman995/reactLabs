import React,{useState} from "react";
function FunLogin()
{
  const  [input,setinput]=useState({
    email:"",
    password:""
    });

  const  handle_email=(e)=>{  
   setinput(previousState => {
      return {...previousState, 
             email:e.target.value}})
    }
  const  handle_password=(e)=>{  
    setinput(previousState => {
      return {...previousState, 
             password:e.target.value}})
    }

  const handle_login=(e)=>{
    alert(`Login Successfully`);
       e.preventDefault();
    }

return(
    <div class="reg_data">
       <form onSubmit={handle_login}>
          <label>Email</label>
          <input type="email" name="email" value={input.email} onChange={handle_email} required></input>
          <label>Password</label>
          <input type="password" name="password" value={input.password} onChange={handle_password} required></input>
          <button type="submit">Login</button>      
        </form>              
    </div>
)}
export default FunLogin;