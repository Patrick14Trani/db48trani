var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var dino_controller = require('../controllers/dinos'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// Dino ROUTES /// 
  
router.post('/resource/dinos', dino_controller.dino_create_post); 
 
// DELETE request to delete Dino. 
router.delete('/resource/dinos/:id', dino_controller.dino_delete); 
 
// PUT request to update Dino. 
router.put('/resource/dinos/:id', dino_controller.dino_update_put); 
 
// GET request for one Dino. 
router.get('/resource/dinos/:id', dino_controller.dino_detail); 
 
// GET request for list of all Dino items. 
router.get('/resource/dinos', dino_controller.dino_list); 
 
module.exports = router; 