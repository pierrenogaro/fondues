const { Router } = require('express');
const { index, show, create, update} = require('../controllers/fondues');

const router = Router();


router.get('/all', index);
router.get('/:id', show);
router.post('/create', create);
router.put('/update/:id', update);

module.exports = router;