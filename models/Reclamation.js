const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reclamationSchema = new Schema({
    date :{
        type: String,
        required: true,
    },
    contenu :{
        type: String,
        required: true,
    },
    type :{
        type: String,
        required: true,
    },
})
module.exports = mongoose.model("Reclamation" ,  reclamationSchema);