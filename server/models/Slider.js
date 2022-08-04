const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const sliderSchema = mongoose.Schema({
  id: { type: number, required: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: false }
});

sliderSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', sliderSchema);