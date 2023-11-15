import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const AnchorLinkRow = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
    <AnchorLink to="#section1" title="Chats">Chats</AnchorLink>
    <AnchorLink to="#section2" title="To-Do Lists">To-Do Lists</AnchorLink>
    <AnchorLink to="#section3" title="Clips">Clips</AnchorLink>
    {/* Add more links as needed */}
  </div>
);

export default AnchorLinkRow;