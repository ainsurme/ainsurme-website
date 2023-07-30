import React from 'react';

import './products.css';

import FeatureChat from '../../assets/Feature_chat.png';
import FeatureIt from '../../assets/Feature_it.png';
import FeatureKb from '../../assets/Feature_kb.png';

const Products = () => {
    return (
        <div class="product" id="products">
            <div class="product-box">
                <h1>How Does Ignitor Work?</h1>
            </div>
            <div class="product-box">
                <div class="product-box-text">
                    <h2>Module Based Learning Content</h2>
                    <p>Ignitor breaks down all the essential aspects of fixed annuities into modules, 
                        creating a structured learning journey that aligns with human learning cycle.</p>
                </div>
                <img src={FeatureKb} alt='Feature Knowledge Base'/>
            </div>
            <div class="product-box">
                <img src={FeatureIt} alt='Feature Illustration Tool'/>
                <div class="product-box-text">
                    <h2>Interactive Illustration Tool</h2>
                    <p>Ignitor includes high-quality illustration capabilities, that provides fund growth of fixed annuties with user-selected features, creating an visual-based approach to understand product risk and return.</p>
                </div>
            </div>
            <div class="product-box">
                <div class="product-box-text">
                    <h2>Personalized Learning Experience</h2>
                    <p>Ignitor leverages AIML, providing personalized learning experience and product recommendation 
                        that aligns with user's profile and risk preference,
                        effectively bridging knowledge gaps and enhancing user's learning journey.</p>
                </div>
                <img src={FeatureChat} alt='Feature Chat'/>
            </div>
            
        </div>
    )
};

export default Products;