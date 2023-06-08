import {Component} from "react";
class Classprops extends Component {
   constructor(props)
    {
        super(props)
     }
    render(){
        const {fname,lname} =this.props;

        return (<h1>Hello, IOT Track1 {fname} {lname}</h1>);
    }
}
export default Classprops;