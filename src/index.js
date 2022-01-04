const { ApolloServer } = require('apollo-server');
const { connect } = require('mongoose');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const options = {
  port: process.env.PORT || 8080,
};

async function init() {
  try {
    await connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/graphql-db',
      { useNewUrlParser: true },
    );
    console.log('Database connected 🥬');
    server
      .listen(options)
      .then(({ port }) =>
        console.log(
          `Serving on port ${port}, awaiting for incoming requests 🚀`,
        ),
      );
  } catch (initErr) {
    console.error('[InitializationErr] - \n', initErr);
  }
}

init();
