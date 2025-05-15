const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /agendamentos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM agendamentos ORDER BY data_agendamento, horario';

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao buscar agendamentos');
    }

    res.render('pages/interfaces/interfaceAgendamentos', { agendamentos: results });
  });
});

module.exports = router;
