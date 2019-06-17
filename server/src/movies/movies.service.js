import { RESTDataSource } from 'apollo-datasource-rest';

class MoviesServices extends RESTDataSource{
    constructor(){
        super();
        this.API_KEY = process.env.API_KEY;
        this.baseURL = 'https://api.themoviedb.org/3/movie/'; 
    }

    async getPopular(page = 1) {
        try {
            const data = await  this.get(
            `movies/popular/?api_key=${this.API_KEY}&page=${page}`,
            null, 
            {
                cacheOptions:{ttl:15}
            });

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getMovieDetail(id) {
        try {
            const data = await this.get(
                `movies/${id}?api_key=${this.API_KEY}`,
                 null, 
                { 
                    cacheOptions:{ ttl:60 }
                });

            return data;
        } catch (error) {
            console.log(error)
        }
    }
}
const  MovieApi = new MoviesServices();
export { MovieApi };