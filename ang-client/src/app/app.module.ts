import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.config';
import { MoivesComponent } from './pages/moives/moives.component';
import { GamesComponent } from './pages/games/games.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    MoivesComponent,
    GamesComponent,
    ComicsComponent,
    TvShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
