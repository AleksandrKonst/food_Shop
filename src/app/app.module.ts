import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './Components/card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
