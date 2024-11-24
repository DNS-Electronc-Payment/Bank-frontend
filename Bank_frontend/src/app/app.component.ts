import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Importuj RouterOutlet
  template: `
    <main class="main">
      <router-outlet></router-outlet> <!-- Dinamički sadržaj -->
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: Arial, sans-serif;
      }
    `,
  ],
})
export class AppComponent {}
