import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { MovieListQuery, MovieListResponse} from '../../models/queries/movies.querie';


@Component({
  selector: 'app-moives',
  templateUrl: './moives.component.html',
  styleUrls: ['./moives.component.scss']
})
export class MoivesComponent implements OnInit {
  movies: Observable<any>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
   this.movies = this.apollo.watchQuery({
      query: MovieListQuery,
      variables: {
         page: 1
      }
   }).valueChanges.pipe(map(({data}: any ) => data.movieList.results ));

  }

}
