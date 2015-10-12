'use strict';
angular.module('myApp.config', [])

   .constant('version', '0.6')
   .constant('loginRedirectPath', '/login')

   // Firebase URL goes here
   //.constant('FBURL', 'https://INSTANCE.firebaseio.com');
   .constant('FBURL', 'https://crud-app.firebaseio.com');
