const line = require('@line/bot-sdk')
const config = require('../config.js')
const client = new line.Client(config);

module.exports = function(data) {
  return client.pushMessage(data.uid, [{type: 'text', text: `Order #${data.orderNumber} ของท่านเสร็จแล้วค่ะ 🙆, บริกรกำลังนำไปเสริฟนะคะ 🏃`}])
}