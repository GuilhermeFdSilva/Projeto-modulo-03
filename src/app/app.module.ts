import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Meus componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';

// importando o array de animes
import { AnimeService } from '../assets/data/animes.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // imports de componentes fixos com istandalone = true
    NavBarComponent,
    RodapeComponent,
    HomeComponent
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
