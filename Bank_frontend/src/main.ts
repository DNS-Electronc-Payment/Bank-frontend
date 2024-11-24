import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CardDataEnteringComponent } from './app/card-data-entering/card-data-entering/card-data-entering.component';

const routes: Routes = [
  { path: '', component: CardDataEnteringComponent }, // Početna ruta
  { path: '**', redirectTo: '' }, // Redirekcija za nepostojeće rute
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
}).catch(err => console.error(err));
