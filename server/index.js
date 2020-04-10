const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// Models

const Recipe = require('../models/Recipe');
const User = require('../models/User');

// Graphql

const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// connects to database

mongoose.connect(
  `${process.env.MONGO_URI}/recipes`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() =>{
    console.log('Db connected')
  })
  .catch(e => console.error(e));

// initialise application

const PORT = process.env.port || 4000;
const app = express();
const corsOptopns = {
  origin: 'http://localhost:3900',
  credentials: true
};

app.use(cors(corsOptopns));

const server = new ApolloServer({
  schema,
  context: {
    Recipe,
    User
  }
});
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
