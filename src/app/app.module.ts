import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { CardModule } from './Cards/card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
