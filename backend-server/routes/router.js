const express = require('express');
const { postContact } = require('../controller/controller');

const router = express.Router();

router.route('/').post(postContact);

module.exports  = router;