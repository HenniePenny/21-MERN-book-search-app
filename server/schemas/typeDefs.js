const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [BookType]
  }

  type Auth {
    token: ID!
    user: User
  }

  type BookType {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(book: Book!): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
