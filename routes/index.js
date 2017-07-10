//var express = require('express');
var mysql = require('mysql');
var serverr = require('../app');
//var io = require('socket.io')(serverr.iofromserver); ESTO ES PARA CHAT CON SOKECT.IO
//var router = express.Router();
var Resoult;
var neww;
var temporal_Query ='';
function INDEX_ROUTER(router,connection) {
    var that = this;
    that.handleRoutes(router,connection);
}

INDEX_ROUTER.prototype.handleRoutes= function(router,connection) {
    
    router.get('/', function(request, response){
        var primer_nombre = request.query.FirstName;
        if(primer_nombre){
            console.log(primer_nombre+" con request.query");
            connection.query("SELECT * FROM tests WHERE house='"+primer_nombre+"'", function(error, rows, field){
                if(!!error){
                    console.log("Error in the query from another view: "+error);
                    neww = "Error in the query";
                } else{
                    Resoult = JSON.stringify(rows);
                    console.log("este es el resultado con json desde fourth con get "+Resoult);
                    response.render('index', {name: Resoult});//el render se tiene que dejar aca por que funciona asycronicamente, si se pone mas abajo (fuera del if y else) no va a alcansar a cargar la variable y mandara a renderizar sin tenerla
                }
            });
        }
        else{
            console.log("Entro al ELSE");
            response.render('index', {name: "text"});
        }
    });
    router.get('/index1', function(request, response){
        //var primer_nombre = request.query.FirstName;
        //if(primer_nombre != null && primer_nombre != undefined && primer_nombre != ""){
            //console.log(primer_nombre+" con request.query");
            connection.query("SELECT * FROM tests2", function(error, rows, field){
                if(!!error){
                    console.log("Error in the query from another view: "+error);
                    neww = "Error in the query";
                } else{
                    Resoult = JSON.stringify(rows);
                    console.log("este es el resultado con json desde fourth con get "+Resoult);
                    response.render('index1', {name: Resoult});//el render se tiene que dejar aca por que funciona asycronicamente, si se pone mas abajo (fuera del if y else) no va a alcansar a cargar la variable y mandara a renderizar sin tenerla
                }
            });
        //}
        /*else{
            console.log("Entro al ELSE");
            response.render('index1', {name: "text"});
        }*/
    });
    router.get('/house', function(request, response){
        connection.query("SELECT * FROM tests2", function(error, rows, field){
            if(!!error){
                console.log("Error in the query from another view: "+error);
                neww = "Error in the query";
            } else{
                Resoult = JSON.stringify(rows);
                console.log("este es el resultado con json desde fourth con get "+Resoult);
                response.render('house', {name: Resoult});//el render se tiene que dejar aca por que funciona asycronicamente, si se pone mas abajo (fuera del if y else) no va a alcansar a cargar la variable y mandara a renderizar sin tenerla
            }
        });
    });
};
INDEX_ROUTER.prototype.Query_Builder= function(router,connection) {
    
};

module.exports = INDEX_ROUTER;