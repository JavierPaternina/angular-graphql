import {gql} from 'apollo-server';

const movieQueries = gql`

    type Query{
        movieDetail: [Movie]
    }

    type Query{
        movieList: [MovieList]
    }

`;

export { movieQueries };
