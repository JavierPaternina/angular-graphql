import gql from 'graphql-tag';
import { MovieList } from '../../models/types/movies';


export const MovieListQuery = gql`
    query MovieList($page:[Int]) {
      movieList(page:$page) {
          page
            results {
               id
               original_title
               original_language
               poster_path
            }
         total_pages
         total_results
      }
   }
 `;
export interface MovieListResponse {
  MovieList: MovieList;
  Loading: boolean;
 }

