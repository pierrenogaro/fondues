const { Router } = require('express');
const { index, show, create, update, deleteFondue} = require('../controllers/fondues');

const router = Router();


router.get('/all', index);
router.get('/:id', show);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteFondue);

module.exports = router;