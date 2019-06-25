import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoivesComponent } from './pages/moives/moives.component';
import { GamesComponent } from './pages/games/games.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';


const routes: Routes = [
   {
      path: 'movies',
      component: MoivesComponent
   },
   {
      path: 'games',
      component: GamesComponent
   },
   {
      path: 'tvshows',
      component: TvShowsComponent
   },
   {
      path: 'comics',
      component: ComicsComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
