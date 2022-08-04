const fs = require('fs');
const Profile = require('../models/Profile');

exports.createThing = (req, res, next) => {
    const profileObject = JSON.parse(req.body.projettile);
    delete profileObject._id;
    const profile = new Projettile({
      ...profileObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    profile.save()
      .then(() => res.status(201).json({ message: 'Object saved !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteThing = (req, res, next) => {
  Profile.findOne({ _id: req.params.id })
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
const profileObject = req.file ?
    {
    ...JSON.parse(req.body.profileObject),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Profile.updateOne({ _id: req.params.id }, { ...profileObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Object modified !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => {
  Profile.findOne({
    _id: req.params.id
  }).then(
    (profile) => {
      res.status(200).json(profile);
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
  Profile.find().then(
    (profile) => {
      res.status(200).json(profile);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};