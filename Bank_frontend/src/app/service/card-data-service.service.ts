import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../env/environment';
import { BankAccount } from '../model/bank-account.model';

@Injectable({
  providedIn: 'root'
})
export class CardDataServiceService {

  constructor(private http: HttpClient) {}

  processCardData(accountDto: BankAccount): Observable<void> {
    return this.http.post<void>(`${environment.apiHost}process-card-data`, accountDto);
  }
}
