import gql from 'graphql-tag';
import { TvShowList } from '../../models/types/tvshows.type';


export const TvShowListQuery = gql`
    query TvShowList($page:[Int]) {
        tvShowList(page:$page) {
          page
            results {
               id
               original_name
               name
               poster_path
            }
         total_pages
         total_results
      }
   }
 `;
export interface MovieListResponse {
    TvShowList: TvShowList;
    Loading: boolean;
}

