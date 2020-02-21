import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {
    constructor(private httpClient: HttpClient) {}

    public getRentals(): Observable<any> {
        return this.httpClient.get('/api/v1/rentals');
    }

    public getRentalById(rentalId: string): Observable<any> {
        return this.httpClient.get(`/api/v1/rentals/${rentalId}`);
    }
}
