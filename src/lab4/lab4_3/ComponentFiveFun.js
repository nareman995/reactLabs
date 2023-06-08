import React from 'react'
import { Contextconsume } from './ContextExF';

 function ComponentFiveFun () {
    return (
      <div>
        <Contextconsume>
        {
           (consume)=>{
            return(
                <h3>Hello comp5 *_* {consume}</h3>
            )
            }
        }
        </Contextconsume>
      </div>
    )
  }
export default ComponentFiveFun;