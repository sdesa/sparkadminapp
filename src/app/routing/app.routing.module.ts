import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '.././login/login.component';
import {HomeComponent} from '.././home/home.component';
import {GameComponent} from '../game/game.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  {path: 'home', component: HomeComponent },
  {path: 'game', component: GameComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }