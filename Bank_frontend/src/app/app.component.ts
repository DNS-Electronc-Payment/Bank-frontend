import { Component } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
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
export class AppComponent {
  title='Bank_frontend'

  private webSocket!: WebSocket;
  private webSocketClient!: WebSocket;
  private webSocketResponse!: WebSocket;

  constructor(private router:Router){
    this.initializeWebSockets();
  }

  initializeWebSockets(){
    this.setupWebSocket("responses")
  }

  private setupWebSocket(endpoint: string) {
    const url = `ws://localhost:8082/${endpoint}`;
    const webSocket = new WebSocket(url);

    webSocket.onopen = () => {
      console.log(`WebSocket connection to ${endpoint} established.`);
    };

    webSocket.onclose = (event) => {
      console.log(`WebSocket connection to ${endpoint} closed. Reconnecting...`);
      setTimeout(() => this.setupWebSocket(endpoint), 1000); // Ponovni pokušaj nakon 5 sekundi
    };

    webSocket.onerror = (error) => {
      console.error(`WebSocket error on ${endpoint}:`, error);
      webSocket.close(); // Zatvori konekciju da bi se pokrenuo onclose handler
    };

    webSocket.onmessage = (event) => {
      console.log(`Message from ${endpoint}:`, event.data);
      // Obradi poruku na osnovu endpoint-a
      if (endpoint === 'responses') {
        this.handleTransactionMessage(event);
      }
    };

    // Sačuvaj referencu na WebSocket
    if (endpoint === 'transactions') {
      this.webSocket = webSocket;
    } else if (endpoint === 'clients') {
      this.webSocketClient = webSocket;
    } else if (endpoint === 'responses') {
      this.webSocketResponse = webSocket;
    }
  }

  private handleTransactionMessage(event: MessageEvent) {
    console.log(event.data);
    this.router.navigate(['/form']);
   
  }
}
