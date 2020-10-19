var express = require('express');
var customerCont = require('../controller/customer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' , { title:'hello express' } );
});
router.get('/getCustomer', function(req, res, next) {
  customerCont.getCustomer(req,res);
});
router.post('/CreateCustomer', function(req, res, next) {
  customerCont.CreateCustomer(req,res);
});
module.exports = router;
