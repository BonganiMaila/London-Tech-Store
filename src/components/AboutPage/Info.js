import React from "react";
import Title from "../Title";
import aboutBack from "../../images/about2.jpg";
export default function Info() {
    return ( 
        <section className = "py-5">
        
       <div className = "container">
        
        <div className = "row">
        
        <div className = "col-10 mx-auto col-md-6 my-3">
        
        <img src = { aboutBack }
        className = "img-fluid img-thumbnail"
        alt = "about company"
        style = {
            { background: "var(--darkGrey)" } }
        /> 
        </div> 
        <div className = "col-10 mx-auto col-md-6 my-3">
        {/*The about us title*/}
        <Title title = "about us" />
        
        {/*About us paragraph*/}
        <p className="text-lead text-muted my-3">London Tech store is proud to offer a comprehensive portfolio of  mobile phones, technology products and home stores. 
                We strive to be leaders in the lifestyle sectors of the technolo industry in South Africa.
                 Our diverse brands allow us to push the boundaries of the technology industry in new and innovative ways – helping us to achieve our goal.
                  We have over 2000 stores across Africa, all of which boast our excellent in-store experience. 
                Now we also have an online presence allowing the convenience of delivery to your door anywhere in South Africa.</p>
                
                <button className="main-link" type="button" style={{marginTop:"2rem"}}> More information</button>
        </div> 
        </div> 
        </div> 
        </section>
    );
}