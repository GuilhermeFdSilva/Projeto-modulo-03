import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Meus componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RodapeComponent } from './rodape/rodape.component';

// importando o array de animes
import { AnimeService } from '../assets/data/animes.service';
import { UsuarioService } from 'src/assets/data/user.service';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { TodosAnimesComponent } from './todos-animes/todos-animes.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
    TodosAnimesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
// Imports de componentes fixos com istandalone = true
    NavBarComponent,
    RodapeComponent
  ],
  providers: [AnimeService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
