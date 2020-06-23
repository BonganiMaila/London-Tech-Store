import React from 'react';
import './App.css';
//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
//font awesome import
//import { FaBeer } from 'react-icons/fa';

//style components import
//import styled from 'styled-components'

//Import all the pages
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Cart from './pages/CartPage';
import Contact from './pages/ContactPage';
import Default from './pages/Default';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';




//import the route and switch
import { Route, Switch } from 'react-router-dom';

//import all the components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Sidecart from './components/SideCart';



function App() {
    return ( 
    <> 
    { /* navbar, sidebar, cart*/ } 
        <Navbar />
        <Sidebar />
        <Sidecart />


        { /*Switch for all the pages*/ } 
        <Switch>
        <Route path = "/" exact component = { Home }/> 

        <Route path = "/about" component = { About }/> 

        <Route path = "/cart" exact component = { Cart }/>

        <Route path = "/contact" component = { Contact }/> 

        <Route path = "/products" component = { Products }/> 

        <Route path = "/singleProduct/:id" component = { SingleProduct }/>  
        
        <Route component = { Default }/>  
        </Switch>

        { /*Display the footer*/ } 
        <Footer />
        </> 
    );
}

export default App;