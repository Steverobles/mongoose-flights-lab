const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/arrivals');

// POST /movies/:id/reviews (create review for a movie)
router.post('/flights/:id/arrivals', flightsCtrl.create);

module.exports = router;