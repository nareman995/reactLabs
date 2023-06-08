import React, { useState } from 'react'
import { Contextprovider } from './ContextExF';
import ComponentFiveFun from './ComponentFiveFun';
import ComponentThreeFun from './ComponentThreeFun';

 function ComponentOneFun ()
  { 
    const [user, setUser] = useState("Nanoo Kandeel"); 
    return (
      <div>
        <Contextprovider value={user}>
           <ComponentFiveFun/>
             <ComponentThreeFun/>
             </Contextprovider>
      </div>
    )
  }
export default ComponentOneFun;