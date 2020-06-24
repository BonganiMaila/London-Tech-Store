import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBack from "../images/productBack5.jpg";

export default function ProductsPage() {
  return (
    <>
      {/*Import the products background*/}
      <Hero img={productsBack} />
      {/*Import the products component*/}
      <Products />
    </>
  );
}
