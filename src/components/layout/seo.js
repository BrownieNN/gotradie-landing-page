// import React from 'react'
// import Helmet from 'react-helmet'
// import icon from '/static/images/favicon/favicon.png'
// import socialBanner from '/static/images/Website-meta.png'

// const Metadata = () => (
//   <div>
//     <Helmet>
//       <title>The Messenger App Built For Work 🔨</title>

//       <meta property='og:image' content={ socialBanner } />
//       <meta property='og:locale' content='en_US' />
//       <meta property='og:type' content='website' />
//       <meta property='og:title' content="The Messenger App Built For Work 🔨" />
//       <meta property='og:description' content="Simplify the way your team, worksites and clients communicate & more." />
//       <meta property='og:url' content='https://www.gotradie.com.au' />
//     </Helmet>
//   </div>
// )

// export default Metadata

import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types' // Import PropTypes
import icon from '/static/images/favicon/favicon.png'
import socialBanner from '/static/images/Website-meta.png'

const Metadata = ({ title, description, imageUrl, url }) => (
  <div>
    <Helmet>
      <title>{title}</title>

      <meta property='og:image' content={imageUrl || socialBanner} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url || 'https://www.gotradie.com.au'} />
    </Helmet>
  </div>
)

// Define prop types
Metadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
}

export default Metadata
