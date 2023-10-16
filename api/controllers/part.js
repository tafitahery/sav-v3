const { db } = require('../db');

exports.addPart = (req, res) => {
  const q = 'INSERT INTO part (name, reference) VALUES (?)';
  const values = [req.body.name, req.body.reference];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json('Part has been created!');
  });
};

exports.getParts = (req, res) => {
  const q = 'SELECT * FROM part';

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

exports.getPart = (req, res) => {
  const q = 'SELECT * FROM part WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data[0]);
  });
};

exports.updatePart = (req, res) => {
  const q = 'UPDATE part SET name = ?, reference = ? WHERE id = ?';
  const values = [req.body.name, req.body.reference];

  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Part has been updated!');
  });
};

exports.deletePart = (req, res) => {
  const q = 'DELETE FROM part WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Part has been deleted!');
  });
};
