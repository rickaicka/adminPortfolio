var date = new Date();
var dia = date.getDate();
var mes = date.getMonth() +1;
var ano = date.getFullYear();
var str_data = dia + '/' + mes + '/' + ano;

var cases =  [
            {_id: 1, nome:"Site Portfolio", tipo: "site", class:"site", descricao:"uctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus orttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim. Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et metus sapien.", data: date, tecnologias: [{_idTec: 1, nome: 'HTML5'},{_idTec: 2, nome: 'CSS3'},{_idTec: 3, nome: 'AngularJS'}]},
            {_id: 2, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema", descricao:"uctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus orttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim. Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et metus sapien.", data: date, tecnologias: [{_idTec: 1, nome: 'HTML5'},{_idTec: 2, nome: 'CSS3'},{_idTec: 3, nome: 'AngularJS'}]},
            {_id: 3, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema", descricao:"uctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus orttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim. Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et metus sapien.", data:  date, tecnologias: [{_idTec: 1, nome: 'HTML5'},{_idTec: 2, nome: 'CSS3'},{_idTec: 3, nome: 'AngularJS'}]},
            {_id: 4, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema", descricao:"uctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus orttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim. Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et metus sapien.", data: date, tecnologias: [{_idTec: 1, nome: 'HTML5'},{_idTec: 2, nome: 'CSS3'},{_idTec: 3, nome: 'AngularJS'}]},
            {_id: 5, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema", descricao:"uctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus orttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim. Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et metus sapien.", data: date, tecnologias: [{_idTec: 1, nome: 'HTML5'},{_idTec: 2, nome: 'CSS3'},{_idTec: 3, nome: 'AngularJS'}]},
            {_id: 6, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema", descricao:"uctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus orttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim. Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et metus sapien.", data: date, tecnologias: [{_idTec: 1, nome: 'HTML5'},{_idTec: 2, nome: 'CSS3'},{_idTec: 3, nome: 'AngularJS'}]}
        ];

module.exports = function(){
    var controller = {};
    controller.listaPortfolio = function(req, res){
        res.json(cases);            
    };
    
    controller.obtemCase = function(req,res){
        var idCase = req.params.idCase;
        var casePortfolio = cases.filter(function(casePortfolio){
            return casePortfolio._id == idCase;
        })[0];
        casePortfolio ? res.json(casePortfolio) : res.status(404).send('Case não encontrado');
    };
    
    controller.removeCase = function(req, res){
        var idCase = req.params.idCase;
        cases = cases.filter(function(casePortfolio){
            return casePortfolio._id != idCase;
        });
        res.status(204).end();
    };
    
    return controller;
}
