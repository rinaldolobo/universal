import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiAbstractComponent } from './ai-abstract-components/ai-abstract-components.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [AiAbstractComponent],
  declarations: [AiAbstractComponent]
})
export class AiabstracModule { }
