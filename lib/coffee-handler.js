const line = require('@line/bot-sdk')
const config = require('../config.js')
const io = require("./socket-io");
const client = new line.Client(config);
const richMenuApi = require('../lib/rich-menu-api')

let orderNumber = 0;

function coffeeHandler(event) {
  const triggerMsg = event.message.text.toUpperCase()

  if (triggerMsg === "EXIT") {
    return Promise.all([
      client.pushMessage(event.source.groupId || event.source.userId, [{type: 'text', text: 'กลับมาหากันอีกนะ 😭'}]),
      richMenuApi.previousPage(event.source.userId)
    ]);
  }

  orderNumber++;

  io.emit("order", {product: triggerMsg, uid: event.source.userId, orderNumber});

  return client.replyMessage(event.replyToken, [
    {
      type: 'text',
      text: `กรุณารอสักครู่ 😸, บาริสต้ากำลังทำกาแฟให้คุณอยู่ค่ะ 😁 (Order No #${orderNumber})`
    }
  ])
}

module.exports = coffeeHandler