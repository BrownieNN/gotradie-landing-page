import React from 'react'
import Helmet from 'react-helmet'

import icon from '/static/images/favicon/favicon.png'
import socialBanner from '/static/images/meta-image.jpg'

const Metadata = () => (
  <div>
    <Helmet>
      <title>We've got tradie chat sorted</title>

      <meta property='og:image' content={ socialBanner } />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content="We've got tradie chat sorted" />
      <meta property='og:description' content="Simplify the way your team, subbies and worksites connect, communicate & collaborate in a purpose built messaging app" />
      <meta property='og:url' content='https://www.gotradie.com.au' />
    </Helmet>
  </div>
)

export default Metadata