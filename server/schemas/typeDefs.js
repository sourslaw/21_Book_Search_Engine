const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
		bookCount: Int
		savedBooks: [Book]
	}

  input Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    bookID: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
		users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
  }

`;

module.exports = typeDefs;
