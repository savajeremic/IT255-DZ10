import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { HomePageComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { SearchPipe } from './pipes/search';
import { SortGenre } from './pipes/sortGenre';
import { SortPegi } from './pipes/sortPegi';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    SearchPipe,
    SortGenre,
    SortPegi
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
