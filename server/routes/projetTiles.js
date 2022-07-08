const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const projettiles = require('../controllers/projettiles');

router.get('/projettiles/', auth, facesnaps.getAllStuff);
router.post('/projettiles/create/', auth, multer, facesnaps.createThing);
router.get('/projettiles/:id', auth, facesnaps.getOneThing);
router.put('/projettiles/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;