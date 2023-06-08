import React, { Component } from 'react'
import { Contextconsume } from './ContextEx';

class ComponentFive extends Component {
  render() {
    return (
      <div>
        <Contextconsume>
        {
          (consume)=>{
           return(
             <h2>Hello comp5 *_* {consume}</h2>
            )
        }
        }
        </Contextconsume>
      </div>
    )
  }
}
export default ComponentFive;