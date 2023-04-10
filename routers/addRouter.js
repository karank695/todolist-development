const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');
router.post('/addTask', addController.add);
module.exports = router;