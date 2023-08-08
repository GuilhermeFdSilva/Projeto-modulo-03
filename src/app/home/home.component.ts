// Componentes do array de animes
import { AnimeService } from './../../assets/data/animes.service';
import { Anime } from './../../assets/data/animes.service';

import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, MatButtonModule, MatIconModule]
})
export class HomeComponent {
  animes: Array<Anime>;

  constructor(private animeService: AnimeService) {
    this.animes = animeService.getAnimes();
  }

}
