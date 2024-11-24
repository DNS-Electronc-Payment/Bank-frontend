import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardDataEnteringComponent } from './card-data-entering/card-data-entering/card-data-entering.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CardDataEnteringComponent 
  ],
  imports: [
    //AppComponent,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
