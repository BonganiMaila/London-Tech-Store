import React from 'react';
import { ProductConsumer } from '../context/context';
import CartSection from '../components/CartPage'
import Hero from '../components/hero';
import cartBack from '../images/cartBack2.jpg'; 

export default function CartPage() {
    return ( 
        <>
        <Hero img={cartBack}/>
        <CartSection />
        </>
    )
}