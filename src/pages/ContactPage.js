import React from 'react';
import Hero from '../components/hero';
import contactImg from '../images/contact.jpg';
import styled from 'styled-components';
import Contact from '../components/contact/contact';


export default function ContactPage() {
    return ( 
        <>
        <contactWrapper>
             <Hero img ={contactImg} alt="contact_img"/>
             <Contact/>

            </contactWrapper>
            </>
        )
    }

    const contactWrapper = styled.div `
    
    
    `;
