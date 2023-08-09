// Componentes do array de animes e usuari
import { Usuario } from 'src/assets/data/user.service';
import { UsuarioService } from 'src/assets/data/user.service';
import { AnimeService } from './../../assets/data/animes.service';
import { Anime } from './../../assets/data/animes.service';

import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
// Material UI
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, MatButtonModule, MatIconModule]
})
export class HomeComponent {
  usuario: Usuario;
  animes: Array<Anime>;

  constructor(private usuarioService: UsuarioService, private animeService: AnimeService) {
    this.usuario = usuarioService.getUser();
    if (this.usuario.logado) {
      this.animes = this.usuario.favoritos;
    } else {
      this.animes = animeService.getAnimes();
    }
  }
}
