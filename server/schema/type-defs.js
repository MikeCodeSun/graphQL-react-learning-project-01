const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  input creatUserInput {
    name: String!
    age: Int!
  }

  input updateUserInput {
    id: ID!
    name: String!
    age: Int!
  }

  type Mutation {
    createUser(input: creatUserInput!): User!
    updateUser(input: updateUserInput!): User!
  }
`;

module.exports = typeDefs;
