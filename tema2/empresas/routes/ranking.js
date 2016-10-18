/**
 * Created by paco on 14/10/16.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);

router.use(bodyParser());

router.get('/', function(req, res, next) {
    var sqlite3 = require("sqlite3").verbose();
    var db = new sqlite3.Database(file);
    var info = [];
    db.all("SELECT * FROM empresa order by puntuacion desc", function(err, rows) {
        rows.forEach(function (row) {
            var valor = {};
            valor.nombre = row.nombre;
            valor.puntuacion = row.puntuacion;
            info.push(valor);
        });
        res.render('ranking', {info:info});
    });
});


module.exports = router;
