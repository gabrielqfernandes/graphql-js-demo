const db = require('../../db');

module.exports = {
  Student: {
    signedTo(student) {
      return (
        db.classes.filter((value) => student.signedTo.includes(value.id)) || []
      );
    },
  },
  Query: {
    students() {
      return db.students;
    },
  },
};
