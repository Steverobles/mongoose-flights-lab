const Flight = require ('../model/flight')

module.exports = {
    create
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    // flight.destinations.push(req.body);
    // req.body.user = req.user_id
    // req.body.userName = req.user.userName
    // req.body.userAvatar = req.user.useravatar
  
    flight.destinations.push(req.body);
    try {
      // Save any changes made to the movie doc
      await flight.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/flights/${flight._id}`);
  }