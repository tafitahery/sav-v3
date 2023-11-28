const { db } = require('../db');

exports.addLocation = (req, res) => {
  const q =
    'INSERT INTO location (location_name, customer_id, machine_id, serial_number, counter_BW, counter_C, contract) VALUES (?)';
  const values = [
    req.body.location_name,
    req.body.customer_id,
    req.body.machine_id,
    req.body.serial_number,
    req.body.counter_BW,
    req.body.counter_C,
    req.body.contract,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json('Location has been created!');
  });
};

exports.getLocations = (req, res) => {
  const q = 'SELECT * FROM location_with_customer_machine_vw';

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

exports.getLocation = (req, res) => {
  const q = 'SELECT * FROM location_with_customer_machine_vw WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data[0]);
  });
};

exports.updateLocation = (req, res) => {
  const q =
    'UPDATE location SET location_name = ?, customer_id = ?, machine_id = ?, serial_number = ?, counter_BW = ?, counter_C = ?, contract = ? WHERE id = ?';
  const values = [
    req.body.location_name,
    req.body.customer_id,
    req.body.machine_id,
    req.body.serial_number,
    req.body.counter_BW,
    req.body.counter_C,
    req.body.contract,
  ];

  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Location has been updated!');
  });
};

exports.deleteLocation = (req, res) => {
  const q = 'DELETE FROM location WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Location has been deleted!');
  });
};
