import { Injectable, EventEmitter } from "@angular/core";
import { Anime, AnimeService } from "./animes.service";

// Definindo o objeto usuário
export class Usuario {
    private login: string | null;
    private senha: string | null;
    private email: string | null;
    favoritos: Array<Anime>;
    logado: boolean = false;

    constructor() {
        const animeService: AnimeService = new AnimeService();
        this.favoritos = animeService.getAnimes();
    }

    // Getters
    getLogin() {
        return this.login;
    }
    getSenha() {
        return this.senha;
    }
    getEmail() {
        return this.email;
    }

    // Setters
    setLogin(login: string | null) {
        this.login = login;
        if (typeof login === null) {
            this.login = '';
        }
    }
    setSenha(senha: string | null) {
        this.senha = senha;
        if (typeof senha === null) {
            this.senha = '';
        }
    }
    setEmail(email: string | null) {
        this.email = email;
        if (typeof email === null) {
            this.email = '';
        }
    }

    toggleFavorito(indice: number) {
        if (this.logado) {
            this.favoritos[indice].favorito = !this.favoritos[indice].favorito;
        }
    }
    favoritosAtivos() {
        let qtdFavoritos = this.favoritos.filter((anime) => anime.favorito).length;
        return qtdFavoritos === 0 ? false : true;
    }
}

// Criando uma instância global de usuario
@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    usuario: Usuario = new Usuario();
    eventoLogin = new EventEmitter<boolean>();

    getUser() {
        return this.usuario;
    }
}