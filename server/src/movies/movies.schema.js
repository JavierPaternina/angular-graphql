import { addMockFunctionsToSchema, makeExecutableSchema } from 'apollo-server';
import { movieType, movieQueries} from './schema';

const movieSchema = makeExecutableSchema({
    typeDefs:[movieType, movieQueries]
});
addMockFunctionsToSchema ({ schema: movieSchema});
export { movieSchema };