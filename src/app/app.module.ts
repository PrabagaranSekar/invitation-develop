import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material-module';
import { NgZorroAntdModule } from '../shared/ng-zorro-ant-module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
