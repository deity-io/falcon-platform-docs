import React from 'react'


const Features = {
  1: 'Containerised Cluster',
  2: 'Managed CI/CD Flow'
}
const Pricing = ({ children, color }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

export default Pricing;
