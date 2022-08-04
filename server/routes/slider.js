const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const projettiles = require('../controllers/sliders');

router.get('/sliders/', auth, sliders.getAllStuff);
router.post('/sliders/create/', auth, multer, sliders.createThing);
router.get('/sliders/:id', auth, sliders.getOneThing);
router.put('/sliders/:id', auth, multer, sliders.modifyThing);
router.delete('/sliders/:id', auth, sliders.deleteThing);

module.exports = router;