const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const profiles = require('../controllers/profiles');

router.get('/profiles/', auth, profiles.getAllStuff);
router.post('/profiles/create/', auth, multer, profiles.createThing);
router.get('/profiles/:id', auth, profiles.getOneThing);
router.put('/profiles/:id', auth, multer, profiles.modifyThing);
router.delete('/profiles/:id', auth, profiles.deleteThing);

module.exports = router;