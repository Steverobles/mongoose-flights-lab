const Flight = require('../model/flight')
const Ticket = require('../model/ticket')
module.exports = {
    new: newFlight,
    create,
    index,
    show
   
    
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight', errorMsg: ''})
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const ticket = await Ticket.find({flight: flight._id})
  res.render('flights/show', { title: 'ALL FLIGHTS', ticket, flight });
}

async function index(req,res) {
    const flights = await Flight.find ({})
     res.render('flights/index', {title:'All Flights', flights})
}

async function create(req,res) {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.redirect('/flights');
  } catch (err) {

    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}