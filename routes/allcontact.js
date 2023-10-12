const express = require('express');
const router = express.Router();
const controller = require('../controller/contacts/getcontact');

router.get('/listContacts', controller.listAllContact);

module.exports = router;