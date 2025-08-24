import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Homepage } from './components/homepage/homepage';
import { Schedule } from './components/schedule/schedule';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Homepage, Schedule, Footer],
  template: `
    <app-header></app-header>
    <app-homepage></app-homepage>
    <app-schedule></app-schedule>
    <app-footer></app-footer>
  `,
})
export class App {
  protected readonly title = signal('VI Congresso Internacional de Pecuária Leiteira da Amazônia Ocidental');
}
