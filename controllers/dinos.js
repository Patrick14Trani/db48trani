var dino = require('../models/dino'); 
 
// List of all Costumes 
exports.dino_list = async function(req, res) { 
    try{
        theDinos = await dino.find();
        res.send(theDinos);
    }catch(err){
        res.status(500);
        res.send(`ERROR: ${err}`);
    }
}; 
 
// for a specific Costume. 
exports.dino_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dino detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.dino_create_post = async function(req, res) { 
    console.log(req.body)
    let document = new dino()
    document.name = req.body.name
    document.color = req.body.color
    document.danger_rating = req.body.danger_rating
    try{
        let result = await document.save()
        res.send(result)
    }catch(err){
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }

}; 
 
// Handle Costume delete form on DELETE. 
exports.dino_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dino delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.dino_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dino update PUT' + req.params.id); 
};

// VIEWS 
// Handle a show all view 
exports.dino_view_all_Page = async function(req, res) { 
    try{ 
        theDinos = await dino.find(); 
        res.render('Dino', { title: 'Dino Search Results', results: theDinos }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 