import { Component } from '@angular/core';
// Material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule]
})
export class NavBarComponent {

}
