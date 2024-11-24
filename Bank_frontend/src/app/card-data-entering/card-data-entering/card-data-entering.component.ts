import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardDataServiceService } from '../../service/card-data-service.service';
import { BankAccount } from '../../model/bank-account.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-data-entering',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule], 
  templateUrl: './card-data-entering.component.html',
  styleUrls: ['./card-data-entering.component.css']
})
export class CardDataEnteringComponent implements OnInit {
  
  cardForm!: FormGroup;

  constructor(private fb: FormBuilder, private cardDataService: CardDataServiceService) {}

  ngOnInit(): void {
    console.log('CardDataEnteringComponent is initialized');
    
    this.cardForm = this.fb.group({
      cardHolderName: ['', [Validators.required]],
      cardPAN: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]], // Validacija za 16 brojeva
      cardCVC: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]], // Validacija za 3 broja
      cardDueDate: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      const formData: BankAccount = this.cardForm.value;
      this.cardDataService.processCardData(formData).subscribe({
        next: () => {
          console.log('Card data processed successfully!');
          alert('Card data submitted successfully.');
        },
        error: (err) => {
          console.error('Error processing card data:', err);
          alert('There was an error processing your card data.');
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

}
