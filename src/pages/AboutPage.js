import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBack from "../images/about3.jpg";
export default function AboutPage() {
    return ( 
        <>
        {/*import the hero image*/}
        <Hero img = { aboutBack }/>
        <Info />
        </>
    );
}