"use strict";

const fetch = require('node-fetch');
const config = require(`${process.env.HOME}/.config/openhab-cli/config.json`);

module.exports = {
  send(item, command) {
    const url = `${config.url}/rest/items/${item}`;

    fetch(url, { method: 'POST', body: command}).then(res => {
      // Everything is ok
    }).catch(err => {
      console.log(err);
    });
  },
  list() {
    const url = `${config.url}/rest/items`;
    fetch(url).then(res => {
      return res.json();
    }).then(json => {
      for(const item of json) {
        if(item.type != "Group") {
          console.log(`${item.name}: ${item.label}`);
        }
      }
    }).catch(err => {
      console.log(err);
    });
  }
};
