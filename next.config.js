module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      // Rewrite everything to `pages/index only works locally need redirects in productions  e.g NGINX`
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};
