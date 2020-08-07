const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Booking {
  _id: ID!
  scene: Scene!
  user: User!
  createdAt: String!
  updatedAt: String!
}

type Scene {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type User {
  _id: ID!
  email: String!
  password: String
  createdScenes: [Scene!]
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input SceneInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
    scenes: [Scene!]!
    bookings: [Booking!]!
    login(email: String!, password: String!): AuthData!
}

type RootMutation {
    createScene(sceneInput: SceneInput): Scene
    createUser(userInput: UserInput): User
    bookScene(sceneId: ID!): Booking!
    cancelBooking(bookingId: ID!): Scene!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
