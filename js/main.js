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

    $routeProvider.when('/portfolio/:idCase', {
        templateUrl:'partials/portfolio.html',
        controller: 'PortfolioController'
    });

    $routeProvider.when('/cadPortfolio', {
        templateUrl:'partials/cadPortfolio.html',
        controller: 'PortfolioCadastroController'
    });

    $routeProvider.when('/cadTecnologia', {
        templateUrl:'partials/cadTecnologia.html',
        controller: 'TecnologiaController'
    });

    $routeProvider.otherwise({redirectTo:'/'})
});
