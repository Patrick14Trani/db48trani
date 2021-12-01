var express = require('express');

const dino_controller = require('../controllers/dinos')
var router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 

/* GET home page. */
router.get('/', secured, dino_controller.dino_view_all_Page);

/* GET update costume page */ 
router.get('/update', secured, dino_controller.dino_view_all_Page); 

module.exports = router;