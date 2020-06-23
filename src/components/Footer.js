import React from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context'

export default function footer() {
    return (
        <ProductConsumer>
          {value => {
            return <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6"> 
                  <p className="text-capitalize">This London Tech Store Website was created by Bongani Maila</p>
                </div>
                <div className="col-md-6 d-flex justify-content-around"> 
                  {value.socialData.map(item=>  <a href={item.url} key={item.id}>{item.icon}</a>)}
                </div>
              </div>
            </div>
            </FooterWrapper>

            
          }} 
        </ProductConsumer>
    )
}

const FooterWrapper = styled.footer`
background:var(--darkGrey);
color:var(--mainWhite);
.icon{
  font-size: 1.5rem;
  color:var(--mainWhite);
  transition:var(--mainTransition);
  .icon:hover{
    color:var(--primaryColor);
  
  }
}

`;
