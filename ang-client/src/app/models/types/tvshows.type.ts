export class TvShow {
   first_air_date: string;
   genre_ids: number;
   id: number;
   name: string;
   original_language: string;
   original_name: string;
   overview: string;
   popularity: number;
   poster_path: string;
   status: string;
   tagline: string;
   title: string;
   vote_average: number;
   vote_count: number;
}

export class TvShowList {
   page: number;
   results: [TvShow];
   total_pages: number;
   total_results: number;
}

