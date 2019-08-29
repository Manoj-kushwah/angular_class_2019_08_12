import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListPipe } from '../shared/list.pipe';
import { MInputDirective } from '../shared/m-input.directive';

@NgModule({
  declarations: [
    HomeComponent,
    MInputDirective,
    ListPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
