export class Movie {
   adult: boolean;
   backdrop_path: string;
   budget: number;
   genre_ids: [number];
   homepage: string;
   id: number;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   production_companies:[ProductionCompanies];
   status: string;
   tagline: string;
   title: string;
}

export class MovieList {
   page: number;
   results: [Movie];
   total_pages: number;
   total_results: number;
}

export class  Genere {
   id: number;
   name: string;
}

export class  ProductionCompanies {
   id: number;
   logo_path: string;
   name: string;
   origin_country: string;
}
