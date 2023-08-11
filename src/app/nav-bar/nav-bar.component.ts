// Componentes do usuário
import { Usuario, UsuarioService } from 'src/assets/data/user.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  usuario: Usuario;
  constructor(usuarioService: UsuarioService) {
    this.usuario = usuarioService.getUser();
  }
}
