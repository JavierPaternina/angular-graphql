import { tvShowsController } from './tv-show.controller';

const tvShowsResolver = { 
    Query: {
        tvShowList: (_source: any, arg: any) => {
             return tvShowsController.getTvShowsList(arg);   
        },
        tvShowDetail: (_source: any, arg: any) => {
            return tvShowsController.getTvShowDetails(arg);
        }
    }
};

export { tvShowsResolver };