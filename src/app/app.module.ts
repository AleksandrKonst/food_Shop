import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CardComponent } from './Components/card/card.component';
import { PanelCardsComponent } from './Components/panel-cards/panel-cards.component';
import { LoginComponent } from './Components/login/login.component';

import {AppRoutingModule} from "./app-routing.module";
import {RouterLink, RouterLinkActive} from "@angular/router";

import {AppMatModule} from "./app-mat.module";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, BrowserModule, FormsModule, AppRoutingModule, RouterLink, RouterLinkActive, AppMatModule],
  declarations: [AppComponent, HeaderComponent, CardComponent, PanelCardsComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
