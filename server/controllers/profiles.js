const fs = require('fs');
const Projettile = require('../models/Profile');

exports.createThing = (req, res, next) => {
    const projettileObject = JSON.parse(req.body.projettile);
    delete projettileObject._id;
    const projettile = new Projettile({
      ...thiprojettileObjectngObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    projettile.save()
      .then(() => res.status(201).json({ message: 'Object saved !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteThing = (req, res, next) => {
  Projettile.findOne({ _id: req.params.id })
    .then(projettile => {
    const filename = projettile.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Projettile.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object saved !'}))
        .catch(error => res.status(400).json({ error }));
    });
    })
    .catch(error => res.status(500).json({ error }));
};


exports.modifyThing = (req, res, next) => {
const projettileObject = req.file ?
    {
    ...JSON.parse(req.body.projettile),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Projettile.updateOne({ _id: req.params.id }, { ...projettileObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Object modified !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => {
  Projettile.findOne({
    _id: req.params.id
  }).then(
    (projettile) => {
      res.status(200).json(projettile);
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
  Projettile.find().then(
    (projettiles) => {
      res.status(200).json(projettiles);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};