const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Charity {
    _id: ID
    charityName: String
    description: String
    goal: Int
    stripeLink: String
  }

  type User {
    _id: ID
    firstName: String
    lastName String
    email: String
    password: String
  }

  type Query {
    charities: [Charity]
    users: [User]
  }

  type Mutation {
  addCharity(charityName: String, description: String, goal: Int, stripeLink: String): Charity
  updateCharity(charityName: String, description: String): Charity
`;

module.exports = typeDefs;
