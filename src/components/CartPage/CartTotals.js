import React from "react";
import {ProductConsumer} from '../../context';

export default function CartTotals() {
  return <div className="container">
    <div className="row">
      <ProductConsumer>
        {
          value => {
            const {clearCart,cartTotal,cartSubTotal,cartTax} = value;
            return <div className="col text-title text-center my-4">
                
                {/*Button*/}
                <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}>Clear Cart</button>
         
         {/*Display the extracted information from the Product consumer*/}
          <h3>Subtotal: R {cartSubTotal}</h3>
          {/*Youll display this later*/}
          <h3>Tax: R {cartTax}</h3>
          <h3>Total: R {cartTotal}</h3>

            </div>
          }
        }
      </ProductConsumer>

    </div>
    


        </div>;
}
