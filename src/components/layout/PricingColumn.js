import React from 'react';

const PricingColumn = ({ title, price, features }) => {
  return (
    <div className="pricing-column">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingColumn;
