const { db } = require('../db');

exports.addCustomer = (req, res) => {
  const q = 'INSERT INTO customer (name, address) VALUES (?)';
  const values = [req.body.name, req.body.address];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json('Customer has been created!');
  });
};

exports.getCustomers = (req, res) => {
  const q = 'SELECT * FROM customer';

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

exports.getCustomer = (req, res) => {
  const q = 'SELECT * FROM customer WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data[0]);
  });
};

exports.updateCustomer = (req, res) => {
  const q = 'UPDATE customer SET name = ?, address = ? WHERE id = ?';
  const values = [req.body.name, req.body.address];

  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Customer has been udated!');
  });
};

exports.deleteCustomer = (req, res) => {
  const q = 'DELETE FROM customer WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Customer has been deleted!');
  });
};
