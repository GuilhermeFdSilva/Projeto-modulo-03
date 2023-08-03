import { Component } from '@angular/core';
// Mterial UI
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatToolbarModule , MatButtonModule]
})
export class RodapeComponent {

}
