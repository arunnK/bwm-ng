import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { Routes, RouterModule } from '@angular/router';

import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { RentalService } from './shared/rental.service';

const routes: Routes = [
    {
        path: 'rentals',
        component: RentalComponent,
        children: [
            { path: '', component: RentalListComponent },
            { path: ':rentalId', component: RentalDetailComponent },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        NgPipesModule,
    ],
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent,
    ],
    providers: [RentalService],
})
export class RentalModule {}
