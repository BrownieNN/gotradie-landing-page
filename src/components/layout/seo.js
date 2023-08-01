import React from 'react'
import Helmet from 'react-helmet'
import icon from '/static/images/favicon/favicon.png'
import socialBanner from '/static/images/Website-meta.png'

const Metadata = () => (
  <div>
    <Helmet>
      <title>The Messenger App Built For Work 🔨</title>

      <meta property='og:image' content={ socialBanner } />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content="The Messenger App Built For Work 🔨" />
      <meta property='og:description' content="Simplify the way your team, worksites and clients communicate & more." />
      <meta property='og:url' content='https://www.gotradie.com.au' />
    </Helmet>
  </div>
)

export default Metadata