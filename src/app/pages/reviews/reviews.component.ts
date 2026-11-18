import { Component } from '@angular/core';
import { ClientReviews } from '@core/config/reviews';

@Component({
    selector: 'page-reviews',
    templateUrl: 'reviews.component.html',
    styleUrl: 'reviews.component.scss',
    imports: [],
})
export class ReviewsPage {
    readonly ClientReviews = ClientReviews;
}
