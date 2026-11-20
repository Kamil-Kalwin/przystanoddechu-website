import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ServiceConfig, ServicesConfigList } from "@core/config/services";
import { SvgIconComponent } from "@features/svg-icon/svg-icon.component";

@Component({
    selector: 'page-service',
    templateUrl: 'service.component.html',
    styleUrl: 'service.component.scss',
    imports: [RouterLink, SvgIconComponent]
})
export class ServicePage {
    private route = inject(ActivatedRoute);

    currentService = signal<ServiceConfig | undefined>(undefined);

     constructor() {
        this.route.paramMap.subscribe(params => {
            const url = params.get('url');

            const travel = ServicesConfigList.find(s => s.url === url);

            this.currentService.set(travel);
        });
    }

}