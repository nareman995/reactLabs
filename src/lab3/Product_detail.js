import React, {Component} from 'react';
import products from './ProductData.js';
import Cart_Productqty from '../lab2/cart_productqty.js';
class Product_detail extends Component {
    render() {
        return (
      <div>
          {products.map(product=>{
           return( <div class="prod_card" key={product.id}>
              <div id={product.category}>
            <img src={product.img} alt={product.name} width="100%" loading="lazy" />
            <h2>{product.name}</h2>
            <h4 class="price">price {product.price}$</h4>
            <div class="prod_desc">
            <h5 >{product.description}</h5>
            <Cart_Productqty/>
            </div>
           </div>
           </div>
           )
        })}
      </div>
    );
  }
}
export default Product_detail;