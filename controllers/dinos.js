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
exports.dino_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await dino.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    }  
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
exports.dino_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await dino.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.dino_type)  
                   toUpdate.dino_type = req.body.dino_type; 
            if(req.body.cost) toUpdate.cost = req.body.cost; 
            if(req.body.size) toUpdate.size = req.body.size; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
        } 
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