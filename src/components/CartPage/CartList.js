import React from "react";
import { ProductConsumer } from "../../context";
import CartItem from "./CartItem";
export default function CartList() {
  return (
    <div className="container-fluid">
      {/* row */}
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { cart, increment, decrement, removeItem } = value;
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    Your cart is currently empty
                  </h1>
                );
              }
              return (
                <>
                {/*mapping of the items in the cart*/}
                  {cart.map(item=>(<CartItem key={item.id} CartItem={item} increment={increment} decrement={decrement} removeItem={removeItem}></CartItem>))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
      cart list
      <CartItem />
    </div>
  );
}
