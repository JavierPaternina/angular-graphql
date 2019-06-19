
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
@NgModule({
  imports: [CommonModule],
  exports: [HeaderComponent, MenuComponent, SideBarComponent],
  declarations: [HeaderComponent, MenuComponent, SideBarComponent],
  providers: [],
})
export class SharedModule { }
