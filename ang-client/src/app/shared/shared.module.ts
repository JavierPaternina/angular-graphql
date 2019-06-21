
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaBoxComponent } from './components/media-box/media-box.component';
@NgModule({
  imports: [CommonModule],
  exports: [HeaderComponent, MenuComponent, SideBarComponent],
  declarations: [HeaderComponent, MenuComponent, SideBarComponent, MediaBoxComponent],
  providers: [],
})
export class SharedModule { }
