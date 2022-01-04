const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: [true, 'A student must have a name'],
    },
    email: {
      type: Schema.Types.String,
      required: [true, 'A student must have an email'],
    },
    age: {
      type: Schema.Types.Number,
      required: [true, 'A student must have an age'],
    },
    signedTo: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Class',
      },
    ],
  },
  { timestamps: true },
);

module.exports = model('Student', schema);
