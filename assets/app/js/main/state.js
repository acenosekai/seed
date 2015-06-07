app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('app', {
        url: '',
        templateUrl: 'app/js/main/templates/outer.tpl.html'

      })
      .state('app.sec', {
        url: '',
        templateUrl: 'app/js/main/templates/secure.tpl.html'
      })
      .state('app.sec.tpl', {
        url: '/home',
        views: {
          leftNav: {
            controller: 'LeftCtrl',
            templateUrl: 'app/js/main/templates/leftNav.tpl.html'
          },
          rightNav: {
            controller: 'RightCtrl',
            templateUrl: 'app/js/main/templates/rightNav.tpl.html'
          },
          main: {
            controller: 'AppCtrl',
            templateUrl: 'app/js/main/templates/main.tpl.html'
          },
        }
      })
      .state('404', {
        url: '/404',
        templateUrl: 'app/js/main/templates/404.tpl.html',
        //      controller: 'AppCtrl'
      });

  }
]);
