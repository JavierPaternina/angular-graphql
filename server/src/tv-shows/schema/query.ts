import { gql } from 'apollo-server';

const TvShowQueries = gql`

    type Query{
        tvShowDetail(id:[Int]):TvShow
        tvShowList(page:[Int]): TvShowList
    }

`;

export { TvShowQueries };
