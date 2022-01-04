const { Student } = require('../../models');

module.exports = {
  Student: {
    signedTo(student) {
      return student.signedTo;
    },
  },
  Query: {
    async students() {
      return await Student.find().populate('signedTo');
    },
  },
  Mutation: {
    async createStudent(_, { student }) {
      return await Student.create(student);
    },
    async updateStudent(_, { id, body }) {
      return await Student.updateOne({ id }, body, {
        runValidators: true,
        new: true,
      });
    },
    async deleteStudent(_, { id }) {
      try {
        const { deletedCount } = await Student.deleteOne({ id });
        return { status: 'success', message: `rows deleted ${deletedCount}` };
      } catch (err) {
        return {
          status: 'fail',
          message: `error trying to delete student id:${id}`,
        };
      }
    },
  },
};
