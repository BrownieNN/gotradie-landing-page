import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import icon from '/static/images/favicon/favicon.png';
import socialBanner from '/static/images/meta/website-meta.png';

const Metadata = ({ title, description, imageUrl, imageWidth, imageHeight, url }) => {
  // Determine the appropriate image URL based on the environment
  const dynamicImageUrl = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_IMAGE_URL : process.env.STAGING_IMAGE_URL;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta property='og:image' content={imageUrl || dynamicImageUrl} />
        {imageWidth && <meta property='og:image:width' content={imageWidth} />}
        {imageHeight && <meta property='og:image:height' content={imageHeight} />}
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url || 'https://www.gotradie.com.au'} />
      </Helmet>
    </div>
  );
};

Metadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  url: PropTypes.string,
};

export default Metadata;
