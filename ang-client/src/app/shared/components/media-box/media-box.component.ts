import { Component, OnInit, Input } from '@angular/core';
import { MediaBoxModel } from './media-box.model';

@Component({
  selector: 'app-media-box',
  templateUrl: './media-box.component.html',
  styleUrls: ['./media-box.component.scss']
})
export class MediaBoxComponent implements OnInit {

@Input() boxData: MediaBoxModel;
constructor() { }

ngOnInit() {

  }

}
