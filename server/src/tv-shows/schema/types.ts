import { gql } from 'apollo-server';

const tvShowType = gql`

    type TvShowList {
        page:Int
        results:[TvShow]
        total_pages: Int
        total_results: Int
    }
    
    type TvShow {
        first_air_date:String
        genre_ids:[Int]
        id:Int
        name:String
        original_language:String
        original_name:String
        overview:String
        popularity:Float
        poster_path:String
        status:String
        tagline:String
        title:String
        vote_average:[Int]
        vote_count:[Int]
    }

    type Genere{
        id: Int
        name: String
    }
`;

export { tvShowType }; 