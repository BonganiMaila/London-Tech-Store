import React from 'react';
import Title from '../title';
import aboutImg from '../../images/about2.jpg';

export default function info() {
    return (
        <section className="py-5">
           <div className="container">
               <div className="row">
                  {/*This is the about section image*/} 
                <div className="col-10 mx-auto-col-md-6 my-3">
                    <img src={aboutImg} 
                    className="img-fluid img-thumbnail" 
                    alt="about_picture"
                    style={{background: "var(--darkGrey"}}/>
                </div>
                {/*This is the about section text/paragraph*/}
                <div className="col-10 mx-auto-col-md-6 my-3">
                <Title title="About us" center/>
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
    )
}
