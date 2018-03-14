const coffeeHandler = require('../lib/coffee-handler')
const beaconHandler = require('../lib/beacon-handler')

const webhook = (req, res) => {
  console.log("User id: " + req.body.events[0].source.userId)
  res.json({status: 'ok'})
  return Promise
    .all(req.body.events.map(handleEvent))
    .catch((e) => {
      console.log(e)
    })
}

function handleEvent(event) {
  if (event.type === 'beacon' && event.beacon.type) {
    return beaconHandler(event)
  } else if (event.type === 'message' && event.message.text) {
    return coffeeHandler(event)
  } else {
    return Promise.resolve('ok');
  }
}

module.exports = {
  webhook
}