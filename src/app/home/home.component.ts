import { Router } from '@angular/router';
// Componentes do array de animes e usuário
import { Usuario, UsuarioService } from 'src/assets/data/user.service';
import { Anime, AnimeService } from './../../assets/data/animes.service';

import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

// Material UI
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, MatButtonModule, MatIconModule, MatSnackBarModule]
})
export class HomeComponent {
  usuario: Usuario;
  animes: Array<Anime>;

  constructor(usuarioService: UsuarioService, animeService: AnimeService, private popup: MatSnackBar, private router: Router) {
    this.usuario = usuarioService.getUser();
    if (this.usuario.logado) {
      this.animes = this.usuario.favoritos;
    } else {
      this.animes = animeService.getAnimes();
    }

    // Cadastrando o componente como ouvinte do evento de login
    usuarioService.eventoLogin.subscribe((logado: boolean) => {
      if (logado) {
        this.animes = this.usuario.favoritos;
      }
    });
  }

  verMais(animeId: string) {
    this.router.navigate(['/detalhes', animeId]);
  }

  popupNaoLogado() {
    this.popup.open('Faça login e adicione seus favoritos', 'ok');
  }
}
