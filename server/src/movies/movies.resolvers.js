import { movieController } from './movies.controller';

const movieResolver = { 
    Query:{
        movieList:(_source,{ page }) => {
             return movieController.getMovieList(page);   
        },
        movieDetail:(_source,{ id }) => {
            return movieController.getMovieDetails(id);
        }
    }
};

export { movieResolver };