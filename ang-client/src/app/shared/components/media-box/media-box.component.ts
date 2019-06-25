import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-box',
  templateUrl: './media-box.component.html',
  styleUrls: ['./media-box.component.scss']
})
export class MediaBoxComponent implements OnInit {

@Input() movie: any;
constructor() { }

ngOnInit() {

  }

}
