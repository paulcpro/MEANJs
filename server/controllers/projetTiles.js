const fs = require('fs');
const Facesnap = require('../models/Facesnap');

exports.createThing = (req, res, next) => {
    const facesnapObject = JSON.parse(req.body.facesnap);
    delete facesnapObject._id;
    const facesnap = new Facesnap({
      ...thifacesnapObjectngObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    facesnap.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteThing = (req, res, next) => {
  Facesnap.findOne({ _id: req.params.id })
    .then(facesnap => {
    const filename = facesnap.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Facesnap.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
    });
    })
    .catch(error => res.status(500).json({ error }));
};


exports.modifyThing = (req, res, next) => {
const facesnapObject = req.file ?
    {
    ...JSON.parse(req.body.facesnap),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Facesnap.updateOne({ _id: req.params.id }, { ...facesnapObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => {
  Facesnap.findOne({
    _id: req.params.id
  }).then(
    (facesnap) => {
      res.status(200).json(facesnap);
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
  Facesnap.find().then(
    (facesnaps) => {
      res.status(200).json(facesnaps);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};