import React from 'react'
import { ProductConsumer } from '../context/context';
import Hero from '../components/hero';
import { Link } from 'react-router-dom';
import Services from '../components/homePage/services';
import FeaturedProducts from '../components/homePage/featuredProducts';

export default function HomePage() {
    return ( 
        <>

        
        <Hero title = "Awesome Tech"
        max = "true">

        
        <Link to = "/products"
        className = "main-link"
        style = {
            { margin: "2rem" }
        }> our products </Link>   
        </Hero>  
        <Services />
        

        {/*  you can comment out this section once you fix the error  */}
        {/*  <FeaturedProducts />  */}
        <FeaturedProducts /> 
        </>
    )
}