const richMenuApi = require('../lib/rich-menu-api');
const io = require('../lib/socket-io');
const line = require('@line/bot-sdk');
const config = require('../config.js');

const client = new line.Client(config);

let currentCustomer = 0;

function beaconHandler(event) {
  const beaconType = event.beacon.type.toUpperCase();
  if (beaconType === 'ENTER') {
    currentCustomer += 1;
    console.log(`${event.source.userId} : Someone entering...`);
    io.emit('currentCustomer', currentCustomer);
    return Promise.all([
      client.pushMessage(event.source.groupId || event.source.userId, [{ type: 'text', text: '😘 ยินดีต้อนรับเข้าสู่ร้าน Dream Cafe! ☕️' }]),
      richMenuApi.changeToRichMenuId(event.source.userId, config.richMenuPage2Id),
    ]);
  } else if (beaconType === 'LEAVE') {
    console.log(`${event.source.userId} : Someone leaving...`);
    currentCustomer -= 1;
    io.emit('currentCustomer', currentCustomer);
    return Promise.all([
      richMenuApi.clearLoadingMenu(event.source.userId),
      client.pushMessage(event.source.groupId || event.source.userId, [{ type: 'text', text: 'กลับมาหากันอีกนะ 😘' }]),
    ]).then(() => richMenuApi.changeToDefaultPage(event.source.userId));
  }
  return Promise.resolve();
}

module.exports = beaconHandler;
