// Componentes do usuari
import { Usuario, UsuarioService } from 'src/assets/data/user.service';

import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
// Mterial UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class RodapeComponent {
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService, private popup: MatSnackBar) {
    this.usuario = usuarioService.getUser();
  }

  // Controle da função de ocultsar e mostrar senha
  mostrar: boolean = true;

  // Copiei por que achei bonito kkk
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

  // Login
  login: FormControl = new FormControl('', Validators.minLength(6));
  senha: FormControl = new FormControl('', Validators.minLength(6));

  logar() {
    if (this.login.value === this.usuario.getLogin() && this.senha.value === this.usuario.getSenha()) {
      this.usuario.logado = true;

      // Emite para os ouvintes que o usuario logou
      this.usuarioService.eventoLogin.emit(true);
      return;
    }
    this.popup.open('Usuário ou senha incorretos', 'ok');
  }

  getErrorMensagem() {
    if (this.login.hasError('minlength') || this.senha.hasError('minlength')) {
      return 'formato invalido';
    }
    return '';
  }
}
