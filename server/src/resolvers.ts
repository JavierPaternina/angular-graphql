import { movieResolver } from './movies';
import { tvShowsResolver } from './tv-shows';

const resolvers = [movieResolver, tvShowsResolver];
export default resolvers;