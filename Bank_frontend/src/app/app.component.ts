import { Component } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CardDataEnteringComponent } from './card-data-entering/card-data-entering/card-data-entering.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HttpClientModule,
    CardDataEnteringComponent,
    
  ], // Importuj RouterOutlet
  providers: [
  

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
