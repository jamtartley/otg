const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');

const port = process.env.PORT || 9000;

const fs = require('fs');
const typedefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'});
const resolvers = require('./resolvers');

const server = new ApolloServer({
  schema: makeExecutableSchema({typeDefs: typedefs, resolvers: resolvers})
});
const app = express();

server.applyMiddleware({app});

app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
);
