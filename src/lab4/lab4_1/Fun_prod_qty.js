import React,{useState} from "react";

function Fun_prod_qty(){
    const [qty,setqty]=useState(1);
    
   const increment_handle=()=>{
       setqty(prev =>prev+1)
    }
      
   const  decrement_handle=()=>{
       if(qty>1)
        return setqty(prev =>prev-1) 
        else return qty;
     }
       
        return (
            <div class="div_comp">
            <button class="button_cart" onClick={increment_handle}>+</button>
           <p class="paragraph">{qty}</p>
            <button class="button_cart" onClick={decrement_handle}>-</button>
            </div>
            );
}
export default Fun_prod_qty;