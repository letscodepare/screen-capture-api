const express = require('express');
const router = express.Router()

const apiService = require('../services/api.service')

router.get('/', apiService.getWelcomeMessage);

router.post('/screen-capture', apiService.postScreenCapture);

module.exports = router