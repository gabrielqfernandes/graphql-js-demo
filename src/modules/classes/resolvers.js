const { Class: ClassModel } = require('../../models');

module.exports = {
  Query: {
    async findClasses() {
      return await ClassModel.find();
    },
  },
  Mutation: {
    async createClass(_, { classSession }) {
      return await ClassModel.create(classSession);
    },
    async updateClass(_, { id, body }) {
      return await ClassModel.updateOne({ id }, body, {
        runValidators: true,
        new: true,
      });
    },
    async deleteClass(_, { id }) {
      try {
        const { deletedCount } = await ClassModel.deleteOne({ id });
        return { status: 'success', message: `rows deleted ${deletedCount}` };
      } catch (err) {
        return {
          status: 'fail',
          message: `error trying to delete class id:${id}`,
        };
      }
    },
  },
};
