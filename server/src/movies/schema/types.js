import {gql} from 'apollo-server';

const movieType = gql`

    type MovieList {
        page:integer
        results:[Movie]
        total_pages: integer
        total_results: integer
    }
    
    type Movie {
        adult:boolean
        backdrop_path:string
        budget:integer
        genere:[Genere]
        homepage:string
        id:integer
        original_language:string
        original_title:string
        overview:string
        popularity:integer
        production_companies:[ProductionCompanies]
        status:string
        tagline:string
        title:string
    }

    type Genere{
        id: integer
        name: string
    }

    type ProductionCompanies{
        id: integer
        logo_path: string
        name: stirng
        origin_country: string
    }
`;

export { movieType }; 