import { Injectable, EventEmitter } from "@angular/core";
import { Anime, AnimeService } from "./animes.service";

// Definindo o objeto usuário
export class Usuario {
    private login: string = 'gui';
    private senha: string = '123';
    private email: string;
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
    setLogin(login: string) {
        this.login = login;
    }
    setSenha(senha: string) {
        this.senha = senha;
    }
    setEmail(email: string) {
        this.email = email;
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