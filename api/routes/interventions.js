const express = require('express');
const {
  addIntervention,
  getIntervention,
  getInterventions,
  updateIntervention,
  deleteIntervention,
} = require('../controllers/intervention');

const router = express.Router();

router.post('/', addIntervention);
router.get('/', getInterventions);
router.get('/:id', getIntervention);
router.put('/:id', updateIntervention);
router.delete('/:id', deleteIntervention);

module.exports = router;
