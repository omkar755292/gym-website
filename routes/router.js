const express = require('express');
const createContactUs = require('../controller/controller');

const router = express.Router();

router.route('/').post(createContactUs);


module.exports  = router;