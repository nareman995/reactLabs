import {Component} from "react";
class Classprops extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isloggedIn:false,
            Subscription:"Guest"
        }
     }
     change_state () {
        this.setState({isloggedIn:true,Subscription:"you now have a subscription"})
        const {isloggedIn,Subscription}=this.state;
        return( console.log(this.state.isloggedIn),
        Subscription)
     }
    render(){

        return ( 
            <div>
        <h1>{this.state.isloggedIn} {this.state.Subscription}</h1>
       <button onClick={()=>this.change_state()}>change state</button>
      {/*<button onClick={this.change_state.bind(this)}>change state</button>*/}
        </div>
        );}
}
export default Classprops;