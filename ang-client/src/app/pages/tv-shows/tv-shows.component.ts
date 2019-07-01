import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TvShowListQuery } from '../../models/queries/tvshows.querie';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvshows: Observable<any>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.tvshows = this.apollo.watchQuery({
      query: TvShowListQuery,
      variables: {
        page: 1
      }
    })
      .valueChanges
      .pipe(map(({ data }: any) =>
        data.tvShowList.results
          .map(r => ({
            name: r.original_name,
            image: r.poster_path,
            id: r.id
          }))
      ));
  }

}
