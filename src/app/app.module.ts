import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { HomeComponent } from './components/home/home.component';
import { ToPostComponent } from './components/to-post/to-post.component';

import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from './others/material.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    HomeComponent,
    ToPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
