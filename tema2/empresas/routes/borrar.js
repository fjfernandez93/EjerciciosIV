var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);

router.use(bodyParser());

router.get('/', function(req, res, next) {
    res.render('borrar-form');
});

router.post('/',function (req, res, next) {
    var sqlite3 = require("sqlite3").verbose();
    var db = new sqlite3.Database(file);

    console.log(db.run("DELETE FROM revision WHERE id_rev=(?)", req.body.iden,function () {
        res.render('exito', {text:"Empresa eliminada"});
    }));


});
module.exports = router;
