import React from 'react';
import Hero from '../components/hero';
import defaultBack from '../images/default.jpg';
import { Link } from 'react-router-dom';

export default function Default() {
    return ( 
        <>
        <Hero img = { defaultBack }
        title = "404"
        max = "true">
        <h2 className = "text-uppercase" > Page not found </h2> 
        <Link to = "/"
        className = "main-link" style={{margin:"2rem"}}> Return Home </Link> 
        </Hero> 

        </>
    )
}