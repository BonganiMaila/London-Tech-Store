import React from "react";
import Title from "../title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default function Cart() {
    return ( 
        
        <section className="py-5">
            {/*title*/}
            <div className="container">
                <Title title="Your cart items" center/>
            </div>
            {/*cart columns*/}
            <CartColumns />
            {/*cart columns*/}
            <CartList />
            {/*cart totals*/}
            <CartTotals />

        </section>
    );
}