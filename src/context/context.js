import React, { Component } from 'react';
import { linkData } from '../context/linkData';
import { social } from '../context/social';
import { items } from './productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialData: social,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true
    };



    componentDidMount() {
        //from contentful items

        this.setProducts(items);
    };


    //set products
    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = { id, ...item.fields, image };
            return product;
        });


        //console.log(storeProducts)
        //featured products
        let featuredProducts = storeProducts.filter(item => item.featured === true);
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
                //get the totals
        }, () => {
            this.addTotals();
        });
    };

    // get cart from local storage
    getStorageCart = () => {
        let cart;
        //display all the stored items in the cart
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            //return the cart as empty
            cart = []
        }
        return cart;
    };


    // get product from local storage
    getStorageProduct = () => {
        //checking if the item is undefined
        return localStorage.getItem('singleProduct') ?
            JSON.parse(localStorage.getItem("singleProduct")) :
            {};
    };
    // get totals
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;

        this.state.cart.forEach(item => {
                //add the subtotal to the total
                subTotal += item.total
                    //add each item to total
                cartItems += item.count
            })
            //convert the subtotal to 2 decimal points
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.14;
        //convert the tax to 2 decimal points
        tax = parseFloat(tax.toFixed(2));
        //calculate the total
        let total = subTotal + tax;
        //convert the total to 2 decimal points
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            subTotal,
            total
        };
    };



    //add totals
    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })
    };


    // sync storage (this will make all the data stored in the cart not to vanish/get whipped out)
    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));

    };

    //all the add to cart fuctionality
    //add to cart
    addToCart = id => {
        //console.log(`add to cart ${id}`);
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id);
            let total = tempItem.price;

            let cartItem = {...tempItem, count: 1, total };
            tempCart = [...tempCart, cartItem]
        } else {

            //count the total
            tempItem.count++;
            //multiply the price of the item with the number of items
            tempItem.total = tempItem.price * tempItem.count;
            //convert the total
            tempItem.total = parseFloat(tempItem.total.toFixed(2));

        }
        this.setState(() => {
            return { cart: tempCart }
        }, () => {
            //this is to update the new total
            this.addTotals()
                //this is to update the cart storage (the number of items)
            this.syncStorage()
                //this is to open the cart
            this.openCart();
        })
    };


    // set single product
    setSingleProduct = id => {
        //console.log(`set single product ${id}`);
        let product = this.state.storeProducts.find(item => item.id === id);

        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct: {
                ...product,
                loading: false

            }
        })
    };


    //handle the side bar
    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    //handle the cart
    handleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen })
    }

    //close the cart
    closeCart = () => {
            this.setState({ cartOpen: false })
        }
        //open the cart
    openCart = () => {
        this.setState({ cartOpen: true })
    }

//cart function
//increment items
increment = (id) =>{
    console.log(id);
}
//decrement items
decrement = (id) =>{
    console.log(id);
}

//remove item
removeItem = (id) =>{
    console.log(id);
}

clearCart = () =>{
   console.log("youve cleared") 
}

    render() {
        return ( 
            <ProductContext.Provider value = {
                {
                    ...this.state,
                        handleSidebar: this.handleSidebar,
                        handleCart: this.handleCart,
                        closeCart: this.closeCart,
                        openCart: this.openCart,
                        addToCart: this.addToCart,
                        setSingleProduct: this.setSingleProduct,
                        increment:this.increment,
                        decrement:this.decrement,
                        removeItem:this.removeItem,
                        clearCart:this.clearCart  
                }
            } > { this.props.children} 
            </ProductContext.Provider>
        )
    }
}



const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }