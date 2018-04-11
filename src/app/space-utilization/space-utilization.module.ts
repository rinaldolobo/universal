import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceUtilizationComponent } from './space-utilization-component/space-utilization.component';
import { AiabstracModule } from '../aiabstract-module/aiabstract-module.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AiabstracModule
  ],
  entryComponents: [SpaceUtilizationComponent],
  exports: [SpaceUtilizationComponent],
  declarations: [SpaceUtilizationComponent]
})
export class SpaceUtilizationModule { }
