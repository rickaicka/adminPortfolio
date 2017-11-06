angular.module('Main', ['ngRoute', 'ngResource', '720kb.datepicker', 'checklist-model','file-model']).config(function($routeProvider, $locationProvider){

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

    $routeProvider.when('/portfolio/:idCase', {
        templateUrl:'partials/cadPortfolio.html',
        controller: 'PortfolioController'
    });

    $routeProvider.when('/cadPortfolio', {
        templateUrl:'partials/cadPortfolio.html',
        controller: 'PortfolioController'
    });

    $routeProvider.when('/cadTecnologia', {
        templateUrl:'partials/cadTecnologia.html',
        controller: 'TecnologiaController'
    });

    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({redirectTo:'/'})
});
