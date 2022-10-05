var express = require('express');
var router = express.Router();
const {index , bienvenido, logout, destroy} = require('../controller/indexController');

/* GET home page. */
router
    .get('/', index)
    .get('/logout', logout)
    

module.exports = router;
