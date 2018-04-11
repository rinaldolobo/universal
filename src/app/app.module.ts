import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DwelloModule} from './demo-chart/dwemod';
import {AiabstracModule} from './aiabstract-module/aiabstract-module.module';
import {SpaceUtilizationModule} from './space-utilization/space-utilization.module';
import {API} from './app.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DwelloModule,
    AiabstracModule,
    SpaceUtilizationModule,
    HttpModule
  ],
  providers: [API],
  bootstrap: [AppComponent]
})
export class AppModule { }
