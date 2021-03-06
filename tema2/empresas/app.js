var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var empresa = require('./routes/empresa');
var ranking = require('./routes/ranking');
var listado = require('./routes/listado');
var borrar = require('./routes/borrar');
//sqlite3
var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
console.log(exists);


//crear las tablas si no existen
db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE empresa (" +
        "nombre VARCHAR PRIMARY KEY," +
        "puntuacion INTEGER," +
        "num_valoraciones INTEGER DEFAULT 0)"
    );

    db.run("CREATE TABLE revision (" +
        "id_rev INTEGER PRIMARY KEY AUTOINCREMENT," +
        "nombre VARCHAR, "+
        "puntuacion INTEGER," +
        "comentario TEXT," +
        "n_empresa VARCHAR, " +
        "FOREIGN KEY(n_empresa) REFERENCES empresa(nombre))"
    );
  }
});



var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', routes);
app.use('/empresa',empresa);
app.use('/ranking',ranking);
app.use('/listado',listado);
app.use('/borrar',borrar);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
//module.exports = app;
