/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-poc',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' wss://*.firebaseio.com" },
    firebase: 'https://blistering-torch-8966.firebaseio.com',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      apiRoot: 'http://localhost:8000/v1'
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'media-src': "'self'",
      'font-src': "'self' https://fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'connect-src': "'self' http://localhost:8000 wss://*.firebaseio.com",
      'frame-src': '',
      'img-src': "'self' data:",
      'script-src': "'self' 'unsafe-inline' http://*:35729 https://*.firebaseio.com",
    },

    'simple-auth' :{
      authorizer: 'simple-auth-authorizer:token',
      routeAfterAuthentication: '/',
      crossOriginWhitelist: ['http://localhost:8000/']
    },

    'simple-auth-token': {
      refreshAccessTokens: true,
      timeFactor: 1,
      refreshLeeway: 300,
      authorizationPrefix: 'Token ',
      tokenPropertyName: 'login.key',
      serverTokenEndpoint: 'http://localhost:8000/auth/login'
    },
  };

  if (environment === 'development') {
    ENV.APP.LOG_TRANSITIONS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
