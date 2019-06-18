
import { ApolloServer } from "apollo-server";
import { mergeSchemas } from "graphql-tools";
import schemas from "./schema";
import resolvers from "./resolvers";

const schema = mergeSchemas({
    schemas,
    resolvers
});

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({schema});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});