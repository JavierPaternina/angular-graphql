import { MovieShowsServices } from '../services/movie-tvshow.service';

const tvService = new MovieShowsServices(false, {});

const tvShowsController = {
    getTvShowsList: async({ page }: any) => {
        return  await tvService.getPopular(page);
    },
    getTvShowDetails: async({ id }: any) => {
        return await tvService.getDetail(id);
    }
};

export { tvShowsController };