const express = require('express');

const {
  getMachines,
  getMachine,
  addMachine,
  updateMachine,
  deleteMachine,
} = require('../controllers/machine');

const router = express.Router();

router.get('/', getMachines);
router.get('/:id', getMachine);
router.post('/', addMachine);
router.put('/:id', updateMachine);
router.delete('/:id', deleteMachine);

module.exports = router;
