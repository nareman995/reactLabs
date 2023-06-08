import React, { Component } from 'react'
import { Contextprovider } from './ContextEx';
import ComponentFive from './ComponentFive';
import ComponentThreee from './ComponentThreee';

 class FirstComponent extends Component {
  render() {
    return (
      <div>
        <Contextprovider value="Nanoo Kandeel">
           <ComponentFive/>
             <ComponentThreee/>
             </Contextprovider>
      </div>
    )
  }
}
export default FirstComponent;