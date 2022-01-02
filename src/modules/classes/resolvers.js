const db = require('../../db');

module.exports = {
  Query: {
    classes() {
      return db.classes;
    },
  },
};
