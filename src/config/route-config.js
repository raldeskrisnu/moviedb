(function (routeConfig) {

    'use strict';
  
    routeConfig.init = function (app) {
  
      // *** routes variable *** //
      const routes = require('../routes/index');
      const authRoutes = require('../routes/auth');
      const integrationRoutes = require('../routes/movie');
  
      // *** Our Routes *** //
      app.use('/', routes);
      app.use('/auth', authRoutes);
      app.use('/api/v1', integrationRoutes);
    };
  
  })(module.exports);