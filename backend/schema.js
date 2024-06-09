const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Animation {
    id: ID!
    title: String!
    url: String!
    metadata: String!
  }

  type Query {
    animations: [Animation]
  }

  type Mutation {
    uploadAnimation(title: String!, url: String!, metadata: String!): Animation
  }
`;

module.exports = typeDefs;