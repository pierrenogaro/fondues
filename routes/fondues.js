const { Router } = require('express');
const { index, show } = require('../controllers/fondues');

const router = Router();


router.get('/all', index);

module.exports = router;