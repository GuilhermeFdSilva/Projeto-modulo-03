import { Injectable } from "@angular/core";
import { Anime, AnimeService } from "./animes.service";

// Definindo o objeto usuario
export class Usuario {
    private login: string;
    private senha: string;
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

    toogleFavorito(indice: number) {
        if (this.logado) {
            this.favoritos[indice].favorito = !this.favoritos[indice].favorito;
        }
    }
    favoritosAtivos() {
        let qtdFavoritos = this.favoritos.filter((anime) => anime.favorito).length;
        return qtdFavoritos === 0 ? false : true;
    }
}

// Criando uma instancia global de usuario
@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    usuario: Usuario = new Usuario();

    getUser() {
        return this.usuario;
    }
}