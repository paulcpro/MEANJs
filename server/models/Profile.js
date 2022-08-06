const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
        id: { type: Number, required: true },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        imageUrl: { type: String, required: true },
        title: { type: Date, required: true }
}) 

module.exports = mongoose.model('Profile', profileSchema);