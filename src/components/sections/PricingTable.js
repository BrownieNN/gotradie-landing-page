import React from 'react';

const PricingTable = () => {
  const tableStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Added flexWrap to allow columns to wrap on smaller screens
  };

  const columnStyle = {
    flex: '1',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px', // Added marginBottom to create spacing between columns
  };

  const priceStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  const columns = [
    {
      title: 'Basic',
      price: '9.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6', 'Feature 7'],
    },
    {
      title: 'Pro',
      price: '19.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6', 'Feature 7'],
    },
    {
      title: 'Premium',
      price: '29.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6', 'Feature 7'],
    },
  ];

  return (
    <div style={tableStyle}>
      {columns.map((column, index) => (
        <div key={index} style={columnStyle}>
          <h3>{column.title}</h3>
          <p style={priceStyle}>${column.price}</p>
          <ul>
            {column.features.map((feature, featureIndex) => (
              <li key={featureIndex} style={listItemStyle}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
