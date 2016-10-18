var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);

router.use(bodyParser());


/* GET */
router.get('/', function(req, res, next) {
  var sqlite3 = require("sqlite3").verbose();
  var db = new sqlite3.Database(file);
  var empresas = [];
  db.all("SELECT nombre FROM empresa", function(err, rows) {
    rows.forEach(function (row) {
      empresas.push(row.nombre);
    });
    res.render('index', { title: 'Express',empresas:empresas});
  });

});

/* POST */
router.post('/',function (req, res, next) {
  var sqlite3 = require("sqlite3").verbose();
  var db = new sqlite3.Database(file);

  db.run("INSERT INTO revision (nombre,puntuacion,comentario,n_empresa) VALUES (?,?,?,?)", req.body.nombre,
      req.body.puntuacion,req.body.comentario,req.body.empresa, function () {
        res.render('exito',{text: 'Calificación creada'});

        db.get("SELECT avg(puntuacion) as media FROM revision WHERE n_empresa=(?)",req.body.empresa, function(err, rows) {
          var media = rows.media.toFixed(1);
          db.run("UPDATE empresa SET puntuacion=(?) where nombre=(?)", [media,req.body.empresa]);
      });
  })
});
module.exports = router;
