const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const facesnaps = require('../controllers/facesnaps');

router.get('/facesnaps/', auth, facesnaps.getAllStuff);
router.post('/facesnaps/create/', auth, multer, facesnaps.createThing);
router.get('/facesnaps/:id', auth, facesnaps.getOneThing);
// router.put('/facenspas/:id', auth, multer, stuffCtrl.modifyThing);
// router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;