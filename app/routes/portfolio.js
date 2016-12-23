module.exports = function(app){
    var controller = app.controllers.portfolio;
    
    app.route('/portfolio')
        .get(controller.listaPortfolio);

    app.route('/portfolio/:idCase')
        .get(controller.obtemCase)
        .delete(controller.removeCase);
}
