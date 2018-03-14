const richMenuApi = require('../lib/rich-menu-api')
const io = require("./socket-io");
const line = require('@line/bot-sdk')
const config = require('../config.js')
const client = new line.Client(config);

let currentCustomer = 0;

function beaconHandler(event) {
  const beaconType = event.beacon.type.toUpperCase()
  if (beaconType === 'ENTER') {
    currentCustomer++
    io.emit("currentCustomer", currentCustomer);
    return Promise.all([
      client.pushMessage(event.source.groupId || event.source.userId, [{type: 'text', text: '😘 ยินดีต้อนรับเข้าสู้ร้าน Dream Cafe! ☕️'}]),
      richMenuApi.nextPage(event.source.userId)
    ]);
  } else if (beaconType === 'LEAVE') {
    currentCustomer--
    io.emit("currentCustomer", currentCustomer);
    return Promise.all([
      client.pushMessage(event.source.groupId || event.source.userId, [{type: 'text', text: 'กลับมาหากันอีกนะ 😭'}]),
      richMenuApi.previousPage(event.source.userId)
    ]);
  }
}

module.exports = beaconHandler