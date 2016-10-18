
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);

router.use(bodyParser());

router.get('/',function (req,res,next) {
    var sqlite3 = require("sqlite3").verbose();
    var db = new sqlite3.Database(file);
    var empresas = [];
    db.all("SELECT nombre FROM empresa", function (err, rows) {
        rows.forEach(function (row) {
            empresas.push(row.nombre);
        });
        var info = {} ;
        res.render('listado',{info:info,empresas:empresas,nombre:""});
    });
});
router.post('/consulta', function(req, res, next) {
    var sqlite3 = require("sqlite3").verbose();
    var db = new sqlite3.Database(file);
    var empresa = req.body.empresa;
    db.all("SELECT * FROM revision where n_empresa=(?)", empresa,function(err, rows) {
        var info = [];
        rows.forEach(function (row) {
            var valor = {};
            valor.id = row.id_rev;
            valor.nombre = row.nombre;
            valor.nombre = row.nombre;
            valor.nombre = row.nombre;
            valor.puntuacion = row.puntuacion;
            valor.comentario = row.comentario;
            info.push(valor);
        });
        var empresas = [];
        db.all("SELECT nombre FROM empresa", function (err, rows) {
            rows.forEach(function (row) {
                empresas.push(row.nombre);
            });

            res.render('listado',{info:info,empresas:empresas, nombre:empresa});
        });
    });
});


module.exports = router;
