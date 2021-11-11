var express = require('express');
const dino_controller = require('../controllers/dinos')
var router = express.Router();

/* GET home page. */
router.get('/', dino_controller.dino_view_all_Page);

module.exports = router;
