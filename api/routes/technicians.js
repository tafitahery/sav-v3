const express = require('express');
const {
  addTechnician,
  getTechnicians,
  getTechnician,
  updateTechnician,
  deleteTechnician,
} = require('../controllers/technician');

const router = express.Router();

router.post('/', addTechnician);
router.get('/', getTechnicians);
router.get('/:id', getTechnician);
router.put('/:id', updateTechnician);
router.delete('/:id', deleteTechnician);

module.exports = router;
