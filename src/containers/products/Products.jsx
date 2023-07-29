import React from 'react';

import './products.css';

import Product1 from '../../assets/product_1.png';

const Products = () => {
    return (
        <div class="product" id="products">
            <div class="product-box">
                <h1>How Does Ignitor work?</h1>
            </div>
            <div class="product-box">
                <div class="product-box-text">
                    <h2>Module Based Learning Content</h2>
                    <p>Ignitor breaks down all the essential aspects of fixed annuities into different modules, 
                        create a structured learning journey that aligns with the human learning cycle.</p>
                </div>
                <img src={Product1} alt='Product1'/>
            </div>
            <div class="product-box">
                <img src={Product1} alt='Product1'/>
                <div class="product-box-text">
                    <h2>Interactive Illustration Tool</h2>
                    <p>Ignitor includes high-quality illustration capabilities, that provides fund growth of fixed annuties 
                        product with user-selected features, creating an visual-based approach to understand product risk and return.</p>
                </div>
            </div>
            <div class="product-box">
                <div class="product-box-text">
                    <h2>Personalized Learning Experience</h2>
                    <p>Ignitor leverages AIML, providing personalized learning experience and product recommendation aligned with the user's profile and risk preference
                        more effectively bridging knowledge gaps and enhancing the user's learning journey.</p>
                </div>
                <img src={Product1} alt='Product1'/>
            </div>
            
        </div>
    )
};

export default Products;