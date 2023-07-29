import React from 'react';
import './product.css';

const Products = ({ title, text }) => (
  <div className="ignitor__features-container__feature">
    <div className="ignitor__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="ignitor__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Products;