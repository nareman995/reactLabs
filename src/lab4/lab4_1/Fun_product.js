import React,{useState} from "react";
import products from './ProductData.js';
import Fun_prod_qty from './Fun_prod_qty.js';
function Fun_product(){
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
            <Fun_prod_qty/>
            </div>
           </div>
           </div>
           )
        })}
      </div>
    );
  }
export default Fun_product;