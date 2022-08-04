const fs = require('fs');
const Slider = require('../models/Slider');

exports.createThing = (req, res, next) => {
    const sliderObject = JSON.parse(req.body.slider);
    delete sliderObject._id;
    const slider = new Projettile({
      ...thiprojettileObjectngObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    slider.save()
      .then(() => res.status(201).json({ message: 'Object saved !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteThing = (req, res, next) => {
  Slider.findOne({ _id: req.params.id })
    .then(slider => {
    const filename = slider.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Slider.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object saved !'}))
        .catch(error => res.status(400).json({ error }));
    });
    })
    .catch(error => res.status(500).json({ error }));
};


exports.modifyThing = (req, res, next) => {
const sliderObject = req.file ?
    {
    ...JSON.parse(req.body.slider),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Slider.updateOne({ _id: req.params.id }, { ...sliderObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Object modified !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => {
  Slider.findOne({
    _id: req.params.id
  }).then(
    (slider) => {
      res.status(200).json(slider);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.getAllStuff = (req, res, next) => {
  Slider.find().then(
    (sliders) => {
      res.status(200).json(sliders);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};