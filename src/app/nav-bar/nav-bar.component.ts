// Componentes do usuário
import { Usuario, UsuarioService } from 'src/assets/data/user.service';

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
// Material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [NgIf, MatToolbarModule, MatButtonModule]
})
export class NavBarComponent {
  usuario: Usuario;
  constructor(usuarioService: UsuarioService) {
    this.usuario = usuarioService.getUser();
  }
}
