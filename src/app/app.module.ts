import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar.component';
import { MInputDirective } from './shared/m-input.directive';
import { PresentPipe } from './shared/present.pipe';
import { MDynamicComponent } from './shared/m-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentPipe,
    MDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    MDynamicComponent
  ]
})
export class AppModule { }
