// Componentes do usuário
import { Usuario, UsuarioService } from 'src/assets/data/user.service';

import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material UI
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class CadastroComponent {
  usuario: Usuario;
  constructor(usuarioService: UsuarioService) {
    this.usuario = usuarioService.getUser();
  }

  naoCadastrado: boolean = true;

  // Controle da função de ocultsar e mostrar senha
  mostrar: boolean = true;

  nome = new FormControl('', Validators.minLength(3));
  sobreNome = new FormControl('', Validators.minLength(3));
  nomeDeUsuario = new FormControl('', Validators.minLength(6));
  email = new FormControl('', Validators.email);
  senha = new FormControl('', Validators.minLength(6));

  getErrorMensagem() {
    if (this.nome.hasError('minlength') || this.sobreNome.hasError('minlength')) {
      return 'Seu nome é muito curto :(';
    }
    if (this.nomeDeUsuario.hasError('minlength') || this.senha.hasError('minlength')) {
      return 'Mínimo 6 caracteres';
    }
    if (this.email.hasError('email')) {
      return 'E-mail inválido';
    }
    return ''
  }

  cadastrarUsuario() {
    this.usuario.setLogin(this.nomeDeUsuario.value);
    this.usuario.setEmail(this.email.value);
    this.usuario.setSenha(this.senha.value);
    this.naoCadastrado = !this.naoCadastrado
  }
}
