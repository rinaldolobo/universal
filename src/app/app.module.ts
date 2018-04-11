import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DwelloModule} from './demo-chart/dwemod';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DwelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
