import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HeaderConfig } from "./header-config";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    imports: [
        CommonModule, RouterLink
    ]
})
export class AppHeader {
    readonly HeaderConfigOptions = HeaderConfig;
}