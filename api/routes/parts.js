const express = require('express');
const {
  addPart,
  getParts,
  getPart,
  updatePart,
  deletePart,
} = require('../controllers/part');

const router = express.Router();

router.post('/', addPart);
router.get('/', getParts);
router.get('/:id', getPart);
router.put('/:id', updatePart);
router.delete('/:id', deletePart);

module.exports = router;
