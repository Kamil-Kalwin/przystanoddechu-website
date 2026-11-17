import { Component } from "@angular/core";
import { SvgIconComponent } from "@features/svg-icon/svg-icon.component";

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrl: 'footer.component.scss',
    imports: [
        SvgIconComponent
    ]
})
export class AppFooter {
}