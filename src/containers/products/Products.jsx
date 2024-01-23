import React from 'react';

import './products.css';

import FeatureChat from '../../assets/ignitor_v02mac_chat.png';
import FeatureRetirement from '../../assets/ignitor_v02mac_retirement.png';
import FeatureProduct from '../../assets/ignitor_v02mac_product.png';

const Products = () => {
    return (
        <div class="product" id="products">
            <div class="product-box">
                <h1>How Does Ignitor Work?</h1>
            </div>
            <div class="product-box">
                <div class="product-box-text">
                    <h2>Comprehensive Retirement Analytics</h2>
                    <p>Ignitor breaks down all the essential aspects of retirement planning, providing detailed assessment
                        on the retirement need and the risk profile of current portfolio.</p>
                </div>
                <img src={FeatureRetirement} alt='Feature Retirement'/>
            </div>
            <div class="product-box">
                <div class="product-box-text">
                    <h2>Interactive Product Illustration</h2>
                    <p>Ignitor offers annuity product retrieval and includes high-quality illustration capabilities, visualizing risks and returns of selected product versus other popular asset class. </p>
                </div>
                <img src={FeatureProduct} alt='Feature Product'/>
            </div>
            <div class="product-box">
                <div class="product-box-text">
                    <h2>End-to-end Personalized Experience</h2>
                    <p>Ignitor, leveraging AI, delivers a seamless, conversational learning journey in annuities, tailoring every aspect of the experience to fit your personal preferences and risk profile, just like chatting with a friend.</p>
                </div>
                <img src={FeatureChat} alt='Feature Chat'/>
            </div>
            
        </div>
    )
};

export default Products;