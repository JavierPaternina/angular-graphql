import { addMockFunctionsToSchema, makeExecutableSchema } from 'apollo-server';
import { GraphQLSchema } from 'graphql';
import { tvShowType, TvShowQueries } from './schema';

const tvShowsSchema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [tvShowType, TvShowQueries]
});
addMockFunctionsToSchema ({ schema: tvShowsSchema});
export { tvShowsSchema };