module.exports.typeDefs = `
  type Recipe {
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: String
    username: String
  }

  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
  }

  type Token {
    token: String!
  }

  type Query {
    getAllRecipes: [Recipe]
    getCurrentUser: User
  }

  type Mutation {
    addRecipe(name: String!, description: String!, category: String!, instructions: String!, username: String): Recipe

    signinUser(username: String!, password: String!): Token
    signupUser(username: String!, email: String!, password: String!): Token
  }
`;
