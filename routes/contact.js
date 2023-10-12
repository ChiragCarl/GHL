const express = require('express');
const router = express.Router();
const controller = require('../controller/contacts/getcontact');

router.get('/getContacts', controller.getAllContact);

module.exports = router;
