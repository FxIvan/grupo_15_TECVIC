var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/celulares', function(req, res, next) {
  res.render('plantillaProducto');
});
router.get('/accesorio', function(req, res, next) {
  res.render('PlantillaAccesorio');
});


module.exports = router;