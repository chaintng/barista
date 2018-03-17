const line = require('@line/bot-sdk')
const config = require('../config.js')
const richMenuApi = require('../lib/rich-menu-api')
const client = new line.Client(config);

module.exports = function(data) {
  return Promise.all([
    richMenuApi.clearLoadingMenu(data.uid),
    client.pushMessage(data.uid, [{type: 'text', text: `Order #${data.orderNumber} ของท่านเสร็จแล้วค่ะ 🙆, บริกรกำลังนำไปเสริฟนะคะ 🏃`}])
  ]).then(() => richMenuApi.changeToRichMenuId(data.uid, config.richMenuPage2Id))
}