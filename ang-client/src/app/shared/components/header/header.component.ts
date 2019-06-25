import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../models/menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public itemsMenu: MenuItems[];
  constructor() { }

  ngOnInit() {
     this.itemsMenu = [
      {
        name: 'Movies',
        route: '/movies'
      },
      {
        name: 'TvShows',
        route: '/tvshows'
      },
      {
        name: 'Games',
        route: '/games'
      },
      {
        name: 'Comics',
        route: '/movies'
      }
   ];
  }

}
