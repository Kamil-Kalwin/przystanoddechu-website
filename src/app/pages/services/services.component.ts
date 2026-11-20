import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesConfigList, ServicesTypeConfigData } from '@core/config/services';

@Component({
    selector: 'page-services',
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
    imports: [
        KeyValuePipe
    ],
})
export class ServicesPage {
    readonly ServicesTypes = ServicesTypeConfigData;

    servicesByServiceType(type: any) {
        return ServicesConfigList.filter((service) => service.serviceType == type);
    }
}
