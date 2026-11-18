import { Component } from '@angular/core';
import { Certificates } from '@core/config/about';

@Component({
    selector: 'page-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: []
})
export class AboutPage {
    readonly Certificates = Certificates;
}
