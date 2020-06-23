import React from 'react'
import {ProductConsumer} from '../../context';
//import styled from 'styled-components';
import Title from '../title';
import Product from '../Product';


export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const {filteredProducts} = value;
                return (
                    <section className="py-5">
                        <div className="container">
                            {/*This is the tile of the product section*/}
                            <Title center title="Our Products"/>
                            {/*Show all the products*/}
                            <div className="row py-5">
                                {filteredProducts.map(product =>{
                                    return <Product key={product.id} product={product} /> 
                                })}
                            </div>
                        </div>

                    </section>
                )
            }}
        </ProductConsumer>
    )
}
