const coffeeHandler = require('./coffee-handler');
const beaconHandler = require('./beacon-handler');

function handleEvent(event) {
  if (event.type === 'beacon' && event.beacon.type) {
    return beaconHandler(event);
  } else if (event.type === 'message' && event.message.text) {
    return coffeeHandler(event);
  }
  return Promise.resolve('ok');
}

const webhook = (req, res) => {
  console.log(`User id: ${req.body.events[0].source.userId}`);
  res.json({ status: 'ok' });
  return Promise
    .all(req.body.events.map(handleEvent))
    .catch((e) => {
      console.log(e);
    });
};

module.exports = {
  webhook,
};
