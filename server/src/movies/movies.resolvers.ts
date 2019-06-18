import { movieController } from './movies.controller';

const movieResolver = { 
    Query: {
        movieList: (_source: any, arg: any) => {
             return movieController.getMovieList(arg);   
        },
        movieDetail: (_source: any, arg: any) => {
            return movieController.getMovieDetails(arg);
        }
    }
};

export { movieResolver };