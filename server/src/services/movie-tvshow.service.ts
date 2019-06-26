import { RESTDataSource } from 'apollo-datasource-rest';
import { API_KEY, BASE_MOVIE_URL, BASE_SHOWS_URL } from '../constant';

class MovieShowsServices extends RESTDataSource {
    URL: string;
    constructor(movie: boolean, config: any = {}) {
        super();
        this.initialize(config);
        this.URL = movie 
            ? BASE_MOVIE_URL 
            : BASE_SHOWS_URL; 

        this.baseURL = this.URL;
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

    async getDetail(id: number) {
        try {
            const data = await this.get(
                `${id}?api_key=${API_KEY}`);

            return data;
        } catch (error) {
            console.log(error)
        }
    }
}
export { MovieShowsServices };