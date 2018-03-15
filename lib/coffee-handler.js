const line = require('@line/bot-sdk')
const config = require('../config.js')
const io = require("./socket-io");
const client = new line.Client(config);
const richMenuApi = require('../lib/rich-menu-api')

let orderNumber = 0;

function coffeeHandler(event) {
  const triggerMsg = event.message.text.toUpperCase()

  if (triggerMsg === "ENTER") {
    return Promise.all([
      client.pushMessage(event.source.groupId || event.source.userId, [{type: 'text', text: '😘 ยินดีต้อนรับเข้าสู่ร้าน Dream Cafe! ☕️'}]),
      richMenuApi.changeToRichMenuId(event.source.userId, config.richMenuPage2Id)
    ]);
  }

  if (triggerMsg === "EXIT") {
    return Promise.all([
      richMenuApi.clearLoadingMenu(event.source.userId),
      client.pushMessage(event.source.groupId || event.source.userId, [{type: 'text', text: 'กลับมาหากันอีกนะ 😭'}]),
      richMenuApi.changeToDefaultPage(event.source.userId)
    ]);
  }

  orderNumber++;

  if (["AMERICANO", "LATTE", "MOCHA", "CAPPUCCINO", "BREVE", "ESPRESSO"].indexOf(triggerMsg) >= 0) {
    io.emit("order", {product: triggerMsg, uid: event.source.userId, orderNumber});
    return Promise.all([
      richMenuApi.setLoadingInRichMenu(event.source.userId),
      client.replyMessage(event.replyToken, [
        {
          type: 'text',
          text: `กรุณารอสักครู่ 😸, บาริสต้ากำลังทำกาแฟให้คุณอยู่ค่ะ 😁 (Order No #${orderNumber})`
        }]
      )
    ]);
  }
  return Promise.resolve(null);
}

module.exports = coffeeHandler