import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './Components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, MatToolbarModule],
  declarations: [AppComponent, HeaderComponent, CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
