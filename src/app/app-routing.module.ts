import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar.component';


const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
