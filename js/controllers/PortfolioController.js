angular.module('Main').controller('PortfolioController', function($scope, $routeParams, $resource){
    
    $scope.cases = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.job = {
        technologies:[]
    };
    
    $scope.$watch('fileImage', function (newVal) {
        if (newVal)
          $scope.job.image=newVal.name;
      })
    /*
               FTP

    var Case = $resource('/nd-admin/portfolio/:id');
    var Cases = $resource('/nd-admin/portfolio');*/

    var Case = $resource('http://localhost:8000/v1/job/addJob');
    var CaseRemove = $resource('http://localhost:8000/v1/job/deleteJob/:id');
    var Cases = $resource('http://localhost:8000/v1/job/jobs');
    var Technologies = $resource('http://localhost:8000/v1/technology/technologies');
    var Categories = $resource('http://localhost:8000/v1/category/categories');
    var SaveJob = $resource()
    
    $scope.init = function(){
        buscaCases();
        getTechnologies();
        getCategories();
    };
    
    function buscaCases(){
        Cases.get(function(result){
                $scope.cases = result.data;
        });
    };
    
    function saveCase(){
    }
    
    function getTechnologies(){
        Technologies.get(function(result){
            $scope.technologies = result.data;
        })
    }
    function getCategories(){
        Categories.get(function(result){
            $scope.categories = result.data;
        })
    }
    
    $scope.save = function(){
        Case.save($scope.job, function(result){
            console.log(result.data);
        })
    }
    
    $scope.selected = function(item){
        $scope.job.technologies.push(item);
    }

    $scope.remove = function(idCase){
      CaseRemove.get({id:idCase}, function(result){
            buscaCases();
        });
    };


    $scope.init();
})
