import { addMockFunctionsToSchema, makeExecutableSchema } from 'apollo-server';
import { GraphQLSchema } from 'graphql';
import { movieType, movieQueries } from './schema';

const movieSchema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [movieType, movieQueries]
});
addMockFunctionsToSchema ({ schema: movieSchema});
export { movieSchema };