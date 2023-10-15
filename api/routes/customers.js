const express = require('express');

const {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customer');

const router = express.Router();

router.post('/', addCustomer);
router.get('/', getCustomers);
router.get('/:id', getCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
