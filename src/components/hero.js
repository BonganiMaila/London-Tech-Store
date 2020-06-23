import React from 'react';
import styled from 'styled-components';
import mainBcg from '../images/mainBack3.jpg';

export default function hero({img, title, max, children}) {
    return ( 
        <HeroWrapper max={max} img={img}>
            <div className="banner">
                <h1 className="title"> {title}</h1>
                {children} 
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
text-align:center;
display:flex;
align-items:center;
justify-content:center;
min-height: ${props => (props.max? "100vh":"60vh")};
color: var(--mainWhite);
background: url(${props => props.img});
background-repeat:no-repeat;
background-size: cover;

.title{
  padding-top:2rem;
  font-size:3.5rem;
  text-shadow: 4px 4px 2px rgba(150,150,150,0.3);
text-transform: uppercase;
letter-spacing:var(--mainSpacing);
}
`;
hero.defaultProps = {
    img:mainBcg
};


/*when done, comeback and change the min-height to 100vh*/