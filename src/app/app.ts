import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'afcwebsite';
}
