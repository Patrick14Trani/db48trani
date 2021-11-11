const mongoose = require("mongoose") 
const dinoSchema = mongoose.Schema({ 
 name: String, 
 color: String, 
 danger_rating: Number 
}) 
 
module.exports = mongoose.model("Dino", dinoSchema)