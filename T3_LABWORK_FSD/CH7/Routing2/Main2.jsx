// implement the following component in your react application main2.jsx to setup the router and define the route home.jsx
// for the home page product .jsx for the product page add no page create a react router including to route home and product
// create the following rooute and component when a user clicks on the home page it should navigate to the home page and 
// the display welcome to our shop within and h1 tag with blue color also include linkto product page . a product page
//  that displays 3 product information (name, price and image) using props.when user clicks on product page link it
// should nevigate to the product page and diplay products Information. 

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import NotFound from './NotFound';

import LaptopImg from '../assets/Laptop.jpg';
import PhoneImg from '../assets/Phone.jpg';
import WatchImg from '../assets/watch.jpg';

function Main2() {
    const productData = [
        { name: "Laptop", price: "$999", image: LaptopImg },
        { name: "Phone", price: "$599", image: PhoneImg },
        { name: "Watch", price: "$199", image: WatchImg }
    ];

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/product">Product</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product items={productData} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Main2;
