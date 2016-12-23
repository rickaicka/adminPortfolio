angular.module('Main').controller('PortfolioController', function($scope, $routeParams, $resource){
    
    $scope.cases = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    /*
               FTP

    var Case = $resource('/nd-admin/portfolio/:id');
    var Cases = $resource('/nd-admin/portfolio');*/

    var Case = $resource('/portfolio/:idCase');
    var Cases = $resource('/portfolio');
    
    $scope.init = function(){
        buscaCases();
    };
    
    function buscaCases(){
        Cases.query(
            function(cases){
                $scope.cases = cases;
            }, function(erro){
                console.log("Não foi possível obter lista de cases");
                console.log(erro);
            }
        );
    };

    $scope.remove = function(casePortfolio){
      Case.delete({idCase: casePortfolio._id}, buscaCases, function(erro){
                console.log('Não foi possível excluir case');
                console.log(erro);
            }
        );
    };

    Contato.get({idCase: $routeParams.idCase}, function(casePortfolio){
       $scope.casePortfolio = casePortfolio;
    }, function(erro){
        $scope.mensagem = {
            texto: 'Não foi possível localizar o case'
        };
        console.log(erro);
    });


    $scope.init();
})
