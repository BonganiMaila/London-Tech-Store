import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default function SideCart() {
    return (
      <ProductConsumer>
      {value => {
        const {cartOpen, closeCart,cart, cartTotal} = value;
        return <CartWrapper show = {cartOpen} 
        onClick= {closeCart}>
          
            <ul>
              {cart.map(item =>{
                return <li key={item.id} className="cart-item mb-4">
                  <img width="35" src={`../${item.image}`} alt="cart item"/>
                  <div className="mt-3">
                    <h6 className="text-uppercase">{item.title}</h6>
                    <h6 className="text-uppercase">R {item.price}</h6>
                    <h6 className="text-title text-capitalize">amount: {item.count}</h6>
                  </div>
                  </li>
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              Cart total : R {cartTotal}
            </h4>
            <div className="text-center my-5">Back to cart
                <Link to="/cart" className="main-link"/>
            </div>
              </CartWrapper>
      }}      
      </ProductConsumer>
    )
        
}


//styling the cart tab
const CartWrapper = styled.div`
position:fixed;
top:60px;
right:0;
width:100%;
height:100%;
overflow:scroll;
padding:2rem;
background:var(--mainGrey);
z-index:1;
transform:${props => (props.show? 'translate(0)'
: 'translateX(100%)')};
border-left:4px solid var(--primaryColor);
transition:var(--mainTransition);
@media (min-width: 576px){
  width:20rem;

}
.cart-item{
  list-style-type:none;
}


`;

//if you get an error remember to put brackets in the first return statement