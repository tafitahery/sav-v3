const express = require('express');
const {
  addLocation,
  updateLocation,
  getLocations,
  getLocation,
  deleteLocation,
} = require('../controllers/location');

const router = express.Router();

router.post('/', addLocation);
router.get('/', getLocations);
router.get('/:id', getLocation);
router.put('/:id', updateLocation);
router.delete('/:id', deleteLocation);

module.exports = router;
