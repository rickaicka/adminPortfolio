angular.module('Main', ['ngRoute', 'ngResource', '720kb.datepicker']).config(function($routeProvider){

    $routeProvider.when('/index', {
        templateUrl:'partials/home.html',
        controller:'IndexController'
    });

    $routeProvider.when('/', {
        templateUrl:'partials/home.html',
        controller:'IndexController'
    });

    $routeProvider.when('/portfolio', {
        templateUrl:'partials/portfolio.html',
        controller: 'PortfolioController'
    });

    $routeProvider.when('/cadPortfolio', {
        templateUrl:'partials/cadPortfolio.html',
        controller: 'PortfolioCadastroController'
    });

    $routeProvider.otherwise({redirectTo:'/'})
});
