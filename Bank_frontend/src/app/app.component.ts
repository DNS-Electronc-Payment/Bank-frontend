import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CardDataEnteringComponent } from './card-data-entering/card-data-entering/card-data-entering.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HttpClientModule,
    CardDataEnteringComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bank_frontend';
  
  private webSocket!: WebSocket;
  private webSocketClient!: WebSocket;
  private webSocketResponse!: WebSocket;

  constructor(private router:Router){
    this.initializeWebSockets();
  }

  initializeWebSockets(){
    this.setupWebSocket("form")
    
  }

  private setupWebSocket(endpoint: string) {
    const url = `wss://localhost:8082/${endpoint}`;
    const webSocket = new WebSocket(url);

    webSocket.onopen = () => {
      console.log(`WebSocket connection to ${endpoint} established.`);
    };

    webSocket.onclose = (event) => {
      console.log(`WebSocket connection to ${endpoint} closed. Reconnecting...`);
      setTimeout(() => this.setupWebSocket(endpoint), 1000); // Ponovni pokušaj nakon 1 sekundi
    };

    webSocket.onerror = (error) => {
      console.error(`WebSocket error on ${endpoint}:`, error);
      webSocket.close(); // Zatvori konekciju da bi se pokrenuo onclose handler
    };

    webSocket.onmessage = (event) => {
      console.log(`Message from ${endpoint}:`, event.data);
      // Obradi poruku na osnovu endpoint-a
        this.handleSuccess(event);
      
    };

    // Sačuvaj referencu na WebSocket
    if (endpoint === 'form') {
      this.webSocket = webSocket;
    } 
  }

 
  private handleSuccess(event: MessageEvent) {
    console.log(event.data);
    console.log("FORMAAAAAAAAAAAAAA")
    this.router.navigate(['/form']);
  }

  private handleError(event: MessageEvent) {
    console.log(event.data);
    this.router.navigate(['/error']);
  }

  private handleFailed(event: MessageEvent) {
    console.log(event.data);
    this.router.navigate(['/failed']);
  }
}
