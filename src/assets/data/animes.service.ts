import { Injectable } from "@angular/core";

export class Anime {
    id: number;
    nome: string;
    genero: string;
    sinopse: string;
    dataDeLancamento: string;
    qtdEpisodios: number;
    concluido: boolean;
    favorito: boolean;
    destaque: boolean;
    imagem: string;
}

// Instancia globalmente o serviço
@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    private animes: Array<Anime> = [
        {
            id: 1,
            nome: "Naruto",
            genero: "Ação, Aventura",
            sinopse:
                "Naruto Uzumaki, um jovem ninja que busca se tornar o Hokage da Vila da Folha, para ser reconhecido como o ninja mais poderoso.",
            dataDeLancamento: "3 de outubro de 2002",
            qtdEpisodios: 720,
            concluido: true,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/jLy2D42/naruto.jpg",
        },
        {
            id: 2,
            nome: "Attack on Titan",
            genero: "Ação, Drama, Fantasia",
            sinopse:
                "A humanidade luta pela sobrevivência contra gigantes humanoides devoradores de humanos, conhecidos como Titãs.",
            dataDeLancamento: "6 de abril de 2013",
            qtdEpisodios: 75,
            concluido: false,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/2Spfm33/AOT.jpg",
        },
        {
            id: 3,
            nome: "One Piece",
            genero: "Ação, Aventura, Comédia",
            sinopse:
                "Monkey D. Luffy e sua tripulação pirata embarcam em uma jornada épica para encontrar o lendário tesouro conhecido como One Piece.",
            dataDeLancamento: "20 de outubro de 1999",
            qtdEpisodios: 1000,
            concluido: false,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/zRvGVKM/OnePiace.jpg",
        },
        {
            id: 4,
            nome: "Death Note",
            genero: "Suspense, Sobrenatural",
            sinopse:
                "Um estudante encontra um caderno que pode matar pessoas apenas escrevendo seus nomes, e decide usá-lo para tornar o mundo livre de criminosos.",
            dataDeLancamento: "4 de outubro de 2006",
            qtdEpisodios: 37,
            concluido: true,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/k8GvyDG/Death-Note.jpg",
        },
        {
            id: 5,
            nome: "Fullmetal Alchemist: Brotherhood",
            genero: "Ação, Fantasia",
            sinopse:
                "Dois irmãos alquimistas buscam a Pedra Filosofal para restaurar seus corpos após uma tentativa malsucedida de reviver a mãe falecida.",
            dataDeLancamento: "5 de abril de 2009",
            qtdEpisodios: 64,
            concluido: true,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/SRLB0gv/Full-Metal.jpg",
        },
        {
            id: 6,
            nome: "My Hero Academia",
            genero: "Ação, Superpoderes",
            sinopse:
                "Num mundo onde quase todas as pessoas têm superpoderes, um garoto sem habilidades enfrenta desafios para se tornar o maior herói.",
            dataDeLancamento: "3 de abril de 2016",
            qtdEpisodios: 100,
            concluido: false,
            favorito: false,
            destaque: true,
            imagem: "https://i.ibb.co/sCYrzxj/My-Hero-Academy.jpg",
        },
        {
            id: 7,
            nome: "Sword Art Online",
            genero: "Ação, Aventura, Romance",
            sinopse:
                "Jogadores ficam presos em um jogo de realidade virtual, onde a morte no jogo significa morte na vida real.",
            dataDeLancamento: "8 de julho de 2012",
            qtdEpisodios: 96,
            concluido: false,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/bmqzKS0/SAO.jpg",
        },
        {
            id: 8,
            nome: "Demon Slayer: Kimetsu no Yaiba",
            genero: "Ação, Demônios, Histórico",
            sinopse:
                "Tanjiro Kamado se torna um caçador de demônios após sua família ser massacrada por um demônio, e parte em busca de vingança.",
            dataDeLancamento: "6 de abril de 2019",
            qtdEpisodios: 26,
            concluido: true,
            favorito: false,
            destaque: true,
            imagem: "https://i.ibb.co/7gVdPRR/Demom-Slayer.jpg",
        },
        {
            id: 9,
            nome: "Steins;Gate",
            genero: "Ficção Científica, Suspense",
            sinopse:
                "Um cientista descobre uma maneira de enviar mensagens para o passado, mas logo percebe as consequências imprevistas.",
            dataDeLancamento: "6 de abril de 2011",
            qtdEpisodios: 24,
            concluido: true,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/Yp0Ntzf/Steins-Gate.jpg",
        },
        {
            id: 10,
            nome: "Hunter x Hunter",
            genero: "Ação, Aventura, Fantasia",
            sinopse:
                "Gon Freecss parte em uma jornada para se tornar um Hunter, um caçador de tesouros e criaturas exóticas.",
            dataDeLancamento: "16 de outubro de 1999",
            qtdEpisodios: 148,
            concluido: true,
            favorito: false,
            destaque: true,
            imagem: "https://i.ibb.co/zxgJzkk/HxH.jpg",
        },
        {
            id: 11,
            nome: "Neon Genesis Evangelion",
            genero: "Mecha, Psicológico",
            sinopse:
                "Adolescentes pilotam robôs gigantes para proteger a humanidade de seres chamados Anjos.",
            dataDeLancamento: "4 de outubro de 1995",
            qtdEpisodios: 26,
            concluido: true,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/606LHcs/Neon-Genesis.jpg",
        },
        {
            id: 12,
            nome: "Fairy Tail",
            genero: "Ação, Aventura, Magia",
            sinopse:
                "Uma guilda de magos embarca em aventuras emocionantes para proteger seu mundo mágico.",
            dataDeLancamento: "12 de outubro de 2009",
            qtdEpisodios: 328,
            concluido: true,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/8b1Hh9b/Fairy-Tail.jpg",
        },
        {
            id: 13,
            nome: "Tokyo Ghoul",
            genero: "Ação, Horror, Sobrenatural",
            sinopse:
                "Após ser atacado por um Ghoul, um jovem acaba se tornando meio-Ghoul e precisa aprender a lidar com sua nova identidade.",
            dataDeLancamento: "4 de julho de 2014",
            qtdEpisodios: 48,
            concluido: true,
            favorito: false,
            destaque: false,
            imagem: "https://i.ibb.co/c82yT8k/Tokyo-Ghoul.jpg",
        },
    ];
    getAnimes() {
        return this.animes;
    }
    setFavorito(animeId: number){
        let indice: number = this.animes.findIndex((anime) => anime.id === animeId);
        this.animes[indice].favorito = !this.animes[indice].favorito;
    }
}
