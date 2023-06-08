import React, { Component } from 'react'
import { Contextconsume } from './ContextEx';

 class ComponentThreee extends Component {
  render() {
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
}
export default ComponentThreee;