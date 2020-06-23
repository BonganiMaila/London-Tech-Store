import React from 'react';
import Info from '../components/about/info';
import Hero from '../components/hero';
import aboutImg from '../images/about3.jpg';

export default function AboutPage() {
    return ( 
        <>
          <Hero img={aboutImg} /> 
          <Info/> 
        </>
        )
    }
