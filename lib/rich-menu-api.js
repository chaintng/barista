const config = require('../config.js')
const request = require('request-promise')

const nextPage = (userId) => {
  return request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/${config.richMenuPage2Id}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })
}

const previousPage = (userId) => {
  return request({
    method: 'DELETE',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })
}

module.exports = {
  nextPage,
  previousPage
}