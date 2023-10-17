const { db } = require('../db');

exports.addTechnician = (req, res) => {
  const q = 'INSERT INTO technician (name) VALUES (?)';

  db.query(q, [req.body.name], (err, data) => {
    if (err) {
      return res.status(500).status(err);
    }
    return res.status(201).json('Technician has been created!');
  });
};

exports.getTechnicians = (req, res) => {
  const q = 'SELECT * FROM technician';

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).status(err);
    }
    return res.status(200).json(data);
  });
};

exports.getTechnician = (req, res) => {
  const q = 'SELECT * FROM technician WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).status(err);
    }
    return res.status(200).json(data[0]);
  });
};

exports.updateTechnician = (req, res) => {
  const q = 'UPDATE technician SET name = ? WHERE id = ?';

  db.query(q, [req.body.name, req.params.id], (err, data) => {
    if (err) {
      return res.status(500).status(err);
    }
    return res.status(200).json('Technician has been updated!');
  });
};

exports.deleteTechnician = (req, res) => {
  const q = 'DELETE FROM technician WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).status(err);
    }
    return res.status(200).json('Technician has been deleted!');
  });
};
