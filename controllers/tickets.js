const Ticket = require('../model/ticket')
const Flight = require('../model/flight')

module.exports = {
    new:newTicket,
    create
    
}

function newTicket(req, res) {

    res.render('tickets/new', {title: 'Add Flight', flightId:req.params.id, errorMsg: ''})
}


async function create(req,res) {
    try {
      const ticket = new Ticket(req.body) 
      ticket.flight = req.params.id
      await ticket.save();
      res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
  
      console.log(err);
      res.render('tickets/show', { errorMsg: err.message });
    }
  }