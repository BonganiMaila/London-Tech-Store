import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
export default function HomePage() {
  return (
    <>
    {/*Import the hero component*/}
      <Hero title="awesome gadgets" max="true">
        {/*Link to the products page*/}
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
      {/*Import the services component*/}
      <Services />
      {/*Import the featured products component*/}
      <Featured />
    </>
  );
}
