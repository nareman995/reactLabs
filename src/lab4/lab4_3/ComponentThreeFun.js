import React from 'react'
import { Contextconsume } from './ContextExF';

 function ComponentThreeFun () {
    return (
      <div>
        <Contextconsume>
        {
           (consume)=>{
            return(
                <h3>Hello comp3 ^_^ {consume}</h3>
            )
            }
        }
        </Contextconsume>
      </div>
    )
  }
export default ComponentThreeFun;