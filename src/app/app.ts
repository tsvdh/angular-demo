import { Component, signal } from '@angular/core';
import { Distraction } from './distraction/distraction';
import { DistractionHolder } from './distraction-holder/distraction-holder';

@Component({
  imports: [Distraction, DistractionHolder],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
