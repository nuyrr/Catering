const express = require('express');
const { getAllQueries, respondQuery, resolveQuery } = require('../controllers/queryController');

const router = express.Router();

router.get('/', getAllQueries);
router.post('/respond/:id', respondQuery);
router.delete('/:id', resolveQuery);

module.exports = router;
