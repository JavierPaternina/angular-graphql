import { Component, OnInit , Input } from '@angular/core';
import { MenuItems } from '../../../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() itemMenu: MenuItems[];
  @Input() vertical: boolean;
  @Input() horizontal: boolean;

}
