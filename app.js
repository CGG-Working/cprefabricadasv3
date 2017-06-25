var express =  require('express');
var path = require('path');//esta libreria creo que viene con express o noce de donde pero no se tiene que instalar
var mysql = require('mysql');
var bodyParser = require('body-parser');//se usa para poder usar el post en las rutas
//var http = require('http'); ESTO ES PARA CHAT CON SOKECT.IO

var router = express.Router();
var app = express();

var config = require('./config');
var routes = require('./routes/index');

var connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } 
  console.log('connected as id ' + connection.threadId);
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', router);//aqui esta el renderizado de vistas, mas abajo le dice donde estan las vistas que tiene que renderizar aqui
var routes_nav = new routes(router, connection);

//connection.end(); //Si cierro la conexion aqui, ya no puede completar la busqueda cuando inicialize el server(NI tampoco se puede finalizar despues de inicializar el server)

app.set('port', process.env.PORT || config.APP_PORT);//verifica que puerto que esta manejando el ambiente(eg:heroku) si existe uno lo usa de lo contrario usa el que le designo yo
//This serves static files using express, dont use for production
if(process.argv[2] == "dev"){
    app.use(express.static(path.join(__dirname)));//express.static sirve para permitir que node use nuestros archivos y normalmente se pone ('public') el nombre del archivo pero ya que esta ves es dinamico ponemos el path.join que hace eg: path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
    // Returns: '/foo/bar/baz/asdf' (PATH.JOIN ES DE NODE), ahora __dirname es de NODE y si corre por ejemplo $node app.js desde c/wamp/www/proyecto esta variable imprimiria "c/wamp/www/proyecto"
    
    // Handle 404
    app.use(function(request, response) {
        response.status(404).send('404: Page not Found');
    });
    
    // Handle 500
    /*app.use(function(error, request, response, next) {        
        response.status(500).send('500: Internal Server Error');
    });*/
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


var server = app.listen(app.get('port'), function(){
    console.log("app started");
});

module.exports = connection;