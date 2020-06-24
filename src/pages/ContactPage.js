import React from "react";
import Hero from "../components/Hero";
import contactBack from "../images/contact.jpg";
import Contact from "../components/ContactPage/Contact";
export default function ContactPage() {
    return ( 
        <>
        {/*Import Hero image*/}
        <Hero img = { contactBack }/>
        {/*Import the contact component*/} 
        <Contact />
        
        </>
    );
}