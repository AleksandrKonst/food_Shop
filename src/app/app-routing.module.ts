import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelCardsComponent} from "./Components/panel-cards/panel-cards.component";
import {LoginComponent} from "./Components/login/login.component";

const appRoutes: Routes =[
  { path: '', component: PanelCardsComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
