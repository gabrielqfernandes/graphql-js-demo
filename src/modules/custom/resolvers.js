const { GraphQLScalarType, Kind } = require('graphql');

module.exports = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'DateTime custom scalar type',
    serialize(value) {
      return new Date(value).toISOString();
    },
    parseValue(value) {
      return new Date(value).toISOString();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)).toISOString();
      }
      return null;
    },
  }),
};
