const { ApolloServer } = require('apollo-server');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const options = {
  port: process.env.PORT || 8080,
};

server
  .listen(options)
  .then(({ port }) =>
    console.log(`Serving on port ${port}, awaiting for incoming requests 🚀`),
  );
