const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: [true, 'A class must have a name'],
  },
  teacher: {
    type: Schema.Types.String,
    required: [true, 'A class must have a teacher'],
  },
  occurDate: {
    type: Schema.Types.Date,
    required: [true, 'A class must have an occur date'],
  },
});

module.exports = model('Class', schema);
