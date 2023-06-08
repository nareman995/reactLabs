import React,{useState} from "react";
import FunLogin from "./funLogin";
function FunSignUp(){
const  [input,setinput]=useState({
    email:"",
    password:"",
    fname:"",
    lname:"",
    issubmited:false
});
  const  handle_email=(e)=>{  
      setinput(previousState => {
        return { ...previousState, 
            email:e.target.value}})
        }
 const  handle_password=(e)=>{  
       setinput(previousState => {
         return { ...previousState, 
           password:e.target.value}})
        }
 const  handle_fname=(e)=>{  
      setinput(previousState => {
         return { ...previousState, 
          fname:e.target.value}})
        }
 const  handle_lname=(e)=>{  
      setinput(previousState => {
        return { ...previousState, 
        lname:e.target.value}})
       }
            
    
 const handle_submit=(e)=>{
     alert(`welcome  ${input.fname}`);
     setinput({issubmited:true})
     e.preventDefault();
    }

return(
<div class="reg_data">
{input.issubmited ? (<FunLogin/>):(
      <form onSubmit={ handle_submit }>
         <label>Email</label>
         <input type="email" name="email" value={input.email} onChange={handle_email} required></input>
        <label>Password</label>
         <input type="password" name="password" value={input.password} onChange={handle_password} required></input>
         <label>First Name</label>
         <input type="text" name="fname" value={input.fname} onChange={handle_fname} required></input>
         <label>Last Name</label>
         <input type="text" name="lname" value={input.lname} onChange={handle_lname} required></input>
         <button type="submit" >signup</button>      
         </form>     
        )}
      </div>
);}
export default FunSignUp;