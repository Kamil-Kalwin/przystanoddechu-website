import { Component } from '@angular/core';
import { Travels } from '@core/config/travels';

@Component({
    selector: 'page-travels',
    templateUrl: './travels.component.html',
    styleUrl: './travels.component.scss',
    imports: [],
})
export class TravelsPage {
    readonly Travels = Travels;
}
