import { Component } from '@angular/core';
import { ServicesConfigList, ServicesTypeConfigData, ServiceTypeEnum } from '@core/config/services';
import { CarouselComponent } from '@features/carousel/carousel.component';
import { WordCloudComponent } from '@features/word-cloud/word-cloud.component';

@Component({
    selector: 'page-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
    imports: [
        WordCloudComponent, CarouselComponent
    ],
})
export class HomePage {
    readonly ServiceTypes = Object.entries(ServicesTypeConfigData).map((service) => ({serviceType: service[0], ...service[1]}));
 
    readonly keywords: string[] = ['Uważność', 'Oddech', 'Ruch', 'Twórczość', 'Podróże', 'Spotkania'];

    getServicesByType(serviceType: ServiceTypeEnum) {
        return ServicesConfigList.filter((service) => service.serviceType == serviceType);
    }
}
