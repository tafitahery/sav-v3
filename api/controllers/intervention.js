const { db } = require('../db');

exports.addIntervention = (req, res) => {
  const q =
    'INSERT INTO intervention (date, location_id, name, description, comment, status) VALUES (?)';
  const values = [
    req.body.date,
    req.body.location_id,
    req.body.name,
    req.body.description,
    req.body.comment,
    req.body.status,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(201).json('Intervention has been created.');
  });
};

exports.getInterventions = (req, res) => {
  const q = 'SELECT * FROM intervention_location_vw';

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json(data);
  });
};

exports.getIntervention = (req, res) => {
  const q = 'SELECT * FROM intervention_location_vw WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json(data[0]);
  });
};

exports.updateIntervention = (req, res) => {
  const q =
    'UPDATE intervention SET date = ?, location_id = ?, name = ?, description = ?, comment = ?, status = ? WHERE id = ?';
  const values = [
    req.body.date,
    req.body.location_id,
    req.body.name,
    req.body.description,
    req.body.comment,
    req.body.status,
  ];

  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json('Intervention has been updated!');
  });
};

exports.deleteIntervention = (req, res) => {
  const q = 'DELETE FROM intervention WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json('Intervention has been deleted!');
  });
};
