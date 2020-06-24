import React from "react";
import Hero from "../components/Hero";
import defaultBack from "../images/default.jpg";
import { Link } from "react-router-dom";
export default function Default() {
  return (
    <>
    {/*import the default image*/}
      <Hero img={defaultBack} title="404" max="true">
        <h2 className="text-uppercase">Page not found</h2>

        {/*Link it to the home page button*/}
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          return home
        </Link>
      </Hero>
    </>
  );
}
