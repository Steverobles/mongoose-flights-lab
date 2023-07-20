var express = require('express');
const router = express.Router()


const ticketsCtrl = require('../controllers/tickets');



router.post('/flights/:id/tickets', ticketsCtrl.create)
router.get('/tickets/new', ticketsCtrl.new)



module.exports = router;