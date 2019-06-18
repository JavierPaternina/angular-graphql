import { gql } from 'apollo-server';

const movieType = gql`

    type MovieList {
        page:Int
        results:[Movie]
        total_pages: Int
        total_results: Int
    }
    
    type Movie {
        adult:Boolean
        backdrop_path:String
        budget:Int
        genre_ids:[Int]
        homepage:String
        id:Int
        original_language:String
        original_title:String
        overview:String
        popularity:Float
        production_companies:[ProductionCompanies]
        status:String
        tagline:String
        title:String
    }

    type Genere{
        id: Int
        name: String
    }

    type ProductionCompanies{
        id: Int
        logo_path: String
        name: String
        origin_country: String
    }
`;

export { movieType }; 