// Componentes do usuari
import { Usuario, UsuarioService } from 'src/assets/data/user.service';

import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
// Mterial UI
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ]
})
export class RodapeComponent {
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService) {
    this.usuario = usuarioService.getUser();
  }

  // Controle da função de ocultsar e mostrar senha
  mostrar: boolean = true;

  copyright: string = 'AnimeZone 2023 © Guilherme - Start Tech TOTVS';

  redesSociais: Array<any> = [
    {
      nome: 'Facebook',
      link: 'http://www.facebook.com',
      icone: 'https://i.ibb.co/LZYBg8Q/logotipo-circular-do-facebook.png'
    },
    {
      nome: 'Instagram',
      link: 'http://www.instagram.com',
      icone: 'https://i.ibb.co/0nNbcgS/instagram-1.png'
    },
    {
      nome: 'LinkedIn',
      link: 'https://www.linkedin.com/in/guilherme-fran%C3%A7a-da-silva-4756a8155/',
      icone: 'https://i.ibb.co/12YfRcr/linkedin.png'
    }
  ];
}
