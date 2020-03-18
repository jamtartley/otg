const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  things: store.collection('things')
};
