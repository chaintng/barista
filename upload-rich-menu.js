#!/usr/bin/env node

require('dotenv').config();
const config = require('./config.js');
const program = require('commander');
const line = require('@line/bot-sdk');
const fs = require('fs');

const client = new line.Client(config);

program
  .version('0.1.0')
  .option('-d, --delete-all', 'Delete all existed rich menu')
  .parse(process.argv);

let housekeeping = Promise.resolve();

if (program.deleteAll) {
  housekeeping = client.getRichMenuList()
  // eslint-disable-next-line max-len
    .then(output => Promise.all(output.map(richMenuItem => client.deleteRichMenu(richMenuItem.richMenuId))));
}

housekeeping.then(() => client.createRichMenu({
  size: {
    width: 2500,
    height: 1686,
  },
  selected: true,
  name: 'Coffee Menu',
  chatBarText: 'Coffee Menu',
  areas: [
    {
      bounds: {
        x: 0,
        y: 0,
        width: 833,
        height: 843,
      },
      action: {
        type: 'message',
        text: 'LATTE',
      },
    },
    {
      bounds: {
        x: 834,
        y: 0,
        width: 833,
        height: 843,
      },
      action: {
        type: 'message',
        text: 'MOCHA',
      },
    },
    {
      bounds: {
        x: 1667,
        y: 0,
        width: 833,
        height: 843,
      },
      action: {
        type: 'message',
        text: 'CAPPUCCINO',
      },
    },
    {
      bounds: {
        x: 0,
        y: 843,
        width: 833,
        height: 843,
      },
      action: {
        type: 'message',
        text: 'AMERICANO',
      },
    },
    {
      bounds: {
        x: 834,
        y: 843,
        width: 833,
        height: 843,
      },
      action: {
        type: 'message',
        text: 'BREVE',
      },
    },
    {
      bounds: {
        x: 1667,
        y: 843,
        width: 833,
        height: 843,
      },
      action: {
        type: 'message',
        text: 'ESPRESSO',
      },
    },
  ],
}))
  .then((richMenuId) => {
    fs.readFile('./.env', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const result = data.replace(/RICH_MENU_PAGE_2_ID=.*/g, `RICH_MENU_PAGE_2_ID=${richMenuId}`);

      fs.writeFile('./.env', result, 'utf8', (err2) => {
        if (err) return console.log(err2);
        return true;
      });
      return true;
    });
    console.log(`richMenuId: ${richMenuId}`);
    return client.setRichMenuImage(richMenuId, fs.createReadStream('./rich-menu/menu-page-2.jpg'));
  })
  .catch(error => console.log(error.originalError.response.data, error));
