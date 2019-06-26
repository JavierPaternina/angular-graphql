import { MovieShowsServices } from '../services/movie-tvshow.service';

const movieService = new MovieShowsServices(true);

const movieController = {
    getMovieList: async({ page }: any) => {
        return  await movieService.getPopular(page);
    },
    getMovieDetails: async({ id }: any) => {
        return await movieService.getDetail(id);
    }
};

export { movieController };