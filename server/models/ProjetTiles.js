const mongoose = require('mongoose');

const faceSnapSchema = mongoose.Schema({
        // En typescript on peut éviter de tout déclarer grâce au mot clé public (voir constructeur)
        id: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        createDate: { type: Date, required: true },
        snaps: { type: Number, required: true },
        location: { type: String, required: true },
}) 

module.exports = mongoose.model('Facesnap', faceSnapSchema);