import React from 'react';
import './features.css';

import FeatureBar from '../../assets/feature_bar1.png';

const Features = () => (
<div class="features" id="about">
    <div class="feature-box-title">
        <h1>About AInsurMe</h1>
    </div>
    <div class="feature-box">
        <div class = "feature-box-text">
            <img src={FeatureBar} alt='Bar'/>
            <h2>Our Vision</h2>
            <p>Revolutionize the insurance industry through power of AIML (Artificial Intelligence and Machine Learning), with a sharp focus on end-consumers, represented by the 'Me' in our name.</p>
        </div>
        <div class = "feature-box-text">
            <img src={FeatureBar} alt='Bar'/>
            <h2>Our Mission</h2>
            <p>Empower end consumers to make informed decisions in retirement planning by providing accessible, personalized, and comprehensive financial education on fixed annuities.</p>
        </div>
        
    </div>
</div>
);

export default Features;