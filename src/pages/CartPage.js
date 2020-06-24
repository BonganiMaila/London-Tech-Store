import React from "react";
import Hero from "../components/Hero";
import cartBack from "../images/cartBack1.jpg";
import CartSection from "../components/CartPage";

export default function CartPage() {
  return (
    <>
    {/*import the cart image*/}
      <Hero img={cartBack} />
      {/*import all the components in the cart folder*/}
      <CartSection />
    </>
  );
}
