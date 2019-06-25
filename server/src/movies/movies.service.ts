import { RESTDataSource } from 'apollo-datasource-rest';
import { API_KEY } from '../constant';

class MoviesServices extends RESTDataSource {
    constructor(config: any) {
        super();
        this.initialize(config);
        this.baseURL = 'https://api.themoviedb.org/3/movie/'; 
    }

    async getPopular(page: number) {
        try {
            const data = await  this.get(
            `popular?api_key=${API_KEY}&page=${page}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getMovieDetail(id: number) {
        try {
            const data = await this.get(
                `${id}?api_key=${API_KEY}`);

            return data;
        } catch (error) {
            console.log(error)
        }
    }
}
const  MovieApi = new MoviesServices({});
export { MovieApi };