const line = require('@line/bot-sdk')
const config = require('../config.js')
const richMenuApi = require('../lib/rich-menu-api')
const client = new line.Client(config);

module.exports = function(data) {
  return Promise.all([
    richMenuApi.clearLoadingMenu(data.uid),
    richMenuApi.changeToRichMenuId(data.uid, config.richMenuPage2Id),
    client.pushMessage(data.uid, [{type: 'text', text: `Order #${data.orderNumber} ของท่านเสร็จแล้วค่ะ 🙆, บริกรกำลังนำไปเสริฟนะคะ 🏃`}])
  ])
}