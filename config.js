var config = {
  production: {
    baseUrl: process.env.BASE_URL || '', // '' for relative links
    site: {
      url: process.env.SITE_URL || 'http://example.com', // full site url
      title: 'Grayside',
      comments: true,
      // @todo complete support for social icons.
      show_social_icons: false,
      disqus: process.env.DISQUS || 'example',
      googleAnalytics: process.env.GOOGLE_ANALYTICS || '123457'
    }
  },
  development: {
    baseUrl: process.env.DEV_BASE_URL || '', // '' for relative links
    site: {
      url: process.env.DEV_SITE_URL || 'http://localhost:8000', // full site url
      title: 'Grayside',
      comments: true,
      // @todo complete support for social icons.
      show_social_icons: false,
      disqus: process.env.DEV_DISQUS || 'staging-example',
      googleAnalytics: process.env.DEV_GOOGLE_ANALYTICS || '123456'
    }
  },
  social: {
    github_username: '',
    stackoverflow_id: '',
    // Exclude @-prefix.
    twitter_username: '',
    google_plus_id: '',
    email: '',
    linkedin_username: '',
    angellist_username: '',
    bitcoin_url: '',
    paypal_url: '',
    flattr_button: ''
  }
};

module.exports = config;
