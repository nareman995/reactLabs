import {Component} from "react";
class Cart_Productqty extends Component {
    constructor(props)
    {
        super(props)
     this.state={qty:1};
    }
    increment_handle(){
       return this.setState({ qty: this.state.qty + 1 })
     }
     decrement_handle(){
       if(this.state.qty>1)
        return this.setState({ qty: this.state.qty - 1 })
        else return this.state.qty;
     }
    render(){
       
        return (
            <div class="div_comp">
            <button class="button_cart" onClick={()=>this.increment_handle()}>+</button>
           <p class="paragraph" >{this.state.qty}</p>
            <button class="button_cart" onClick={()=>this.decrement_handle()}>-</button>
            </div>
            );}
}
export default Cart_Productqty;