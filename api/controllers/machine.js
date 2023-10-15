const { db } = require('../db');

exports.getMachines = (req, res) => {
  const q = 'SELECT * FROM machine';

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

exports.getMachine = (req, res) => {
  const q = 'SELECT * FROM machine WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data[0]);
  });
};

exports.addMachine = (req, res) => {
  const q = 'INSERT INTO machine (name, brand, model, color) VALUES (?)';
  const values = [
    req.body.name,
    req.body.brand,
    req.body.model,
    req.body.color,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json('Machine has been created!');
  });
};

exports.updateMachine = (req, res) => {
  const q =
    'UPDATE machine SET name = ?, brand = ?, model = ?, color = ? WHERE id = ?';
  const values = [
    req.body.name,
    req.body.brand,
    req.body.model,
    req.body.color,
  ];

  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Machine has been updated!');
  });
};

exports.deleteMachine = (req, res) => {
  const q = 'DELETE FROM machine WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Machine has been deleted!');
  });
};
