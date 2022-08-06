const mongoose = require('mongoose');

const projetTileSchema = mongoose.Schema({
        id: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        createDate: { type: Date, required: true },
        snaps: { type: Number, required: true },
        location: { type: String, required: true },
        category: { type: String, required: false }
}) 

module.exports = mongoose.model('ProjetTile', projetTileSchema);