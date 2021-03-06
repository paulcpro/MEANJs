const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const projettiles = require('../controllers/projettiles');

router.get('/projettiles/', auth, projettiles.getAllStuff);
router.post('/projettiles/create/', auth, multer, projettiles.createThing);
router.get('/projettiles/:id', auth, projettiles.getOneThing);
router.put('/projettiles/:id', auth, multer, projettiles.modifyThing);
router.delete('/projettiles/:id', auth, projettiles.deleteThing);

module.exports = router;