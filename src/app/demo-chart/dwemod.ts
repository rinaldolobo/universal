import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DwelloComponent } from './dcomponent';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DwelloComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    entryComponents: [
        DwelloComponent
    ], exports: [
        DwelloComponent
    ]
})
export class DwelloModule { }
