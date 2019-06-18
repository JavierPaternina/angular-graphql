import { gql } from 'apollo-server';

const movieQueries = gql`

    type Query{
        movieDetail(id:[Int]!):Movie
        movieList(page:[Int]): MovieList
    }

`;

export { movieQueries };
