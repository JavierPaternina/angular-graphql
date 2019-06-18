import { MovieApi } from './movies.service';

const movieController = {
    getMovieList: async({ page }: any) => {
        return  await MovieApi.getPopular(page);
    },
    getMovieDetails: async({ id }: any) => {
        return await MovieApi.getMovieDetail(id);
    }
};

export { movieController };