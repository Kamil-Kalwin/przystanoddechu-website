import { AppPage } from "../../core/config/page.enum";

export interface HeaderConfigData {
    title: string,
    url: string
}

export const HeaderConfig: {[key in AppPage]: HeaderConfigData} = {
    [AppPage.HOME]: {title: 'Strona główna', url: '/'},
    [AppPage.ABOUT]: {title: 'O mnie', url: '/o-mnie'},
    [AppPage.SERVICES]: {title: 'Usługi', url: '/'},
    [AppPage.GALLERY]: {title: 'Galeria', url: '/galeria'},
    [AppPage.TRAVELS]: {title: 'Uważne podróże', url: '/podroze'},
    [AppPage.EVENTS]: {title: 'Wydarzenia', url: '/wydarzenia'},
    [AppPage.LIBRARY]: {title: 'Biblioteka', url: '/'},
    [AppPage.REVIEWS]: {title: 'Opinie', url: '/opinie'},
    [AppPage.CONTACT]: {title: 'Kontakt', url: '/'},
}