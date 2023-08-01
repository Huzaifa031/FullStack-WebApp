const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/stuff');

// const Thing = require('../models/things');

router.post('/', auth,  stuffCtrl.createThing);

router.get('/:id', auth,  stuffCtrl.getOneThing)

router.put('/:id', auth, stuffCtrl.modigyThing)

router.delete('/:id', auth, stuffCtrl.deleteThing)

router.get('/' , auth, stuffCtrl.getAllStuff)

module.exports = router;