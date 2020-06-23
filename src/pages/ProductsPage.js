import React from 'react';
import Products from '../components/ProductsPage/products';
import Hero from '../components/hero';
import ProductBack from '../images/productBack5.jpg';

//import productsBcg from "../images/productsBcg.jpeg";

export default function ProductsPage() {
  return (
    <>
      <Hero img={ProductBack} />
      <Products />
    </>
  );
}
