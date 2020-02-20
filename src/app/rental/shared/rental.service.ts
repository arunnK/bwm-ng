import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
    private rentals: Rental[] = [
        {
            id: '1',
            title: 'New City Apartment',
            city: 'Dubai',
            street: 'Al Mankhool',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Burj Khalifa View Apartment',
            dailyRate: 250,
            shared: false,
            createdAt: '24/12/2017',
        },
        {
            id: '2',
            title: 'City Apartment',
            city: 'Dubai',
            street: 'Al Fahidi',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 2,
            description: 'Creek View',
            dailyRate: 200,
            shared: false,
            createdAt: '24/12/2017',
        },
        {
            id: '3',
            title: 'Ross Apartment',
            city: 'Dubai',
            street: 'Burjuman',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 1,
            description: 'Burj Khalifa View Apartment',
            dailyRate: 150,
            shared: false,
            createdAt: '24/12/2017',
        },
        {
            id: '4',
            title: 'Holiday Apartment',
            city: 'Dubai',
            street: 'Karama',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Burj Khalifa View Apartment',
            dailyRate: 300,
            shared: false,
            createdAt: '24/12/2017',
        },
    ];
    constructor() {}

    public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>(observer => {
            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000);
        });
    }

    public getRentalById(rentalId: string): Observable<Rental> {
        return new Observable<Rental>(observer => {
            setTimeout(() => {
                const foundRental = this.rentals.find(rental => {
                    return rental.id === rentalId;
                });

                observer.next(foundRental);
            }, 500);
        });
    }
}