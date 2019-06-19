import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public itemsSideBar = [
   {
     name: 'Films',
     route: '/movies'
   },
   {
     name: 'Tv',
     route: '/tvshows'
   },
   {
     name: 'Gamers',
     route: '/games'
   },
   {
     name: 'Comics',
     route: '/movies'
   }
];
  constructor() { }

  ngOnInit() {
  }

}
