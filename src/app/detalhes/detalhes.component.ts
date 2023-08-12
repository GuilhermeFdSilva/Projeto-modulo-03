import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from 'src/assets/data/user.service';
import { Anime, AnimeService } from 'src/assets/data/animes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  animeId: string;
  usuario: Usuario;
  animes: Array<Anime>;
  anime: Anime;
  concluido: string;
  indice: number;
  
  constructor(private router: ActivatedRoute, usuarioService: UsuarioService, animeService: AnimeService, private popup: MatSnackBar) {
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
  
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.animeId = params.get('id') ?? '';
    });
    this.anime = this.animes[this.animes.findIndex((anime) => anime.id === parseInt(this.animeId))];
    this.concluido = this.anime.concluido ? 'sim' : 'não';
    this.indice = parseInt(this.animeId);
  }
  
  popupNaoLogado() {
    this.popup.open('Faça login e adicione seus favoritos', 'ok');
  }
}
