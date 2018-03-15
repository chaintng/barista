const config = require('../config.js')
const request = require('request-promise')

let loadingInterval = {};

function clearLoadingMenu(userId) {
  if (loadingInterval[userId] && loadingInterval[userId].intervalObject) {
    clearInterval(loadingInterval[userId].intervalObject)
    delete loadingInterval[userId]
  }
}
function setLoadingInRichMenu(userId) {
  if (!loadingInterval[userId]) {
    loadingInterval[userId] = {
      intervalObject: null,
      currentPage: null
    }
  }

  if (!loadingInterval[userId].intervalObject) {
    loadingInterval[userId].currentPage = config.loadingMenuPage1Id
    changeToRichMenuId(userId, config.loadingMenuPage1Id)
    loadingInterval[userId].intervalObject = setInterval(() => setLoadingInRichMenu(userId), 1000)
  } else {
    if (loadingInterval[userId].currentPage === config.loadingMenuPage1Id) {
      loadingInterval[userId].currentPage = config.loadingMenuPage2Id
      changeToRichMenuId(userId, config.loadingMenuPage2Id)
    } else {
      loadingInterval[userId].currentPage = config.loadingMenuPage1Id
      changeToRichMenuId(userId, config.loadingMenuPage1Id)
    }
  }
}

const changeToRichMenuId = (userId, richMenuId) => {
  return request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/${richMenuId}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })
}

const changeToDefaultPage = (userId) => {
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
  changeToRichMenuId,
  changeToDefaultPage,
  setLoadingInRichMenu,
  clearLoadingMenu
}