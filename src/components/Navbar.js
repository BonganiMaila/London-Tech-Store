import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

//importing the product consumer from the context folder
import { ProductConsumer } from "../context";
//importing the image/logo
import logo from "../images/logo.png";



//This is the navigation bar 
export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>

            {/*The sidebar icon*/}
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />

              {/*The logo and the name of the store*/}
             
              <h3>London's Tech Store</h3>

              {/*The cart icon*/}
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

//
const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  z-index:1;
  height: 60px;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
  h3{
    
  font-size:2rem;
  text-shadow: 4px 4px 2px rgba(150,150,150,0.3);
text-transform: uppercase;
letter-spacing:var(--mainSpacing);
  }

`;
