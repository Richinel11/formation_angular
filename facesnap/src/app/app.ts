import { Component, signal } from '@angular/core';
import { Snapface } from './snapface/snapface';


@Component({
  selector: 'app-root',
  imports: [
    Snapface
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
