import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoComponent} from './info/info.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'info', component: InfoComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:'/home' , pathMatch: 'full'},
  { path: 'info/:slug', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
