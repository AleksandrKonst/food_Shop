import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './Components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import { PanelCardsComponent } from './Components/panel-cards/panel-cards.component';
import { LoginComponent } from './Components/login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

const appRoutes: Routes =[
  { path: '', component: PanelCardsComponent},
  { path: 'login', component: LoginComponent},
];
@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, MatToolbarModule, RouterModule.forRoot(appRoutes), MatInputModule, MatIconModule],
  declarations: [AppComponent, HeaderComponent, CardComponent, PanelCardsComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
