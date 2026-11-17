import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './features/header/header.component';
import { AppFooter } from '@features/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, AppHeader, AppFooter]
})
export class App {
  protected readonly title = signal('PrzystanOddechu');
}
