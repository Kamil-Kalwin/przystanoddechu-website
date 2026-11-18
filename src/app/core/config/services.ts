export enum ServiceTypeEnum {
    MINDFULNESS, BREATH, CREATIVITY, BODY, WOMENS
}

export interface ServiceTypeConfig {
    title: string,
    description: string,
    image: string
}

export const ServicesTypeConfigData: {[key in ServiceTypeEnum]: ServiceTypeConfig} = {
    [ServiceTypeEnum.MINDFULNESS]: {
        title: "Uważność",
        description: "Praktyka, która pomaga zatrzymać się, zauważać to, co dzieje się w Tobie i wokół Ciebie oraz bardziej świadomie odpowiadać na codzienne doświadczenia.",
        image: "service_1.jpeg"
    },
    [ServiceTypeEnum.BREATH]: {
        title: "Oddech",
        description: "Sposób, w jaki oddychasz, ma znaczenie dla zdrowia i samopoczucia. Możesz lepiej poznać swój oddech i uczyć się korzystać z niego świadomie.",
        image: "service_1.jpeg"
    },
    [ServiceTypeEnum.CREATIVITY]: {
        title: "Kreatywność",
        description: "Przestrzeń do swobodnego tworzenia, eksperymentowania z kolorem i podążania za własną intuicją. Bez potrzeby umiejętności malarskich i bez gotowego pomysłu na efekt.",
        image: "service_1.jpeg"
    },
    [ServiceTypeEnum.BODY]: {
        title: "Ciało i Ruch",
        description: "Różne sposoby bycia w ruchu i w kontakcie z ciałem - od spokojnej jogi yin po swobodne, spontaniczne po-ruszenie.",
        image: "service_1.jpeg"
    },
    [ServiceTypeEnum.WOMENS]: {
        title: "Strefa Kobiet",
        description: "Spotkania i wyjazdy dla kobiet, w których  jest czas na rozmowę, wspólne doświadczenie, praktykę, twórczość i po prostu bycie razem.",
        image: "service_1.jpeg"
    }
}

export interface ServiceConfig {
    title: string,
    serviceType: ServiceTypeEnum,
    url: string
}

export const ServicesConfigList: ServiceConfig[] = [
    {
        title: "8 tygodniowe kursy uważności",
        serviceType: ServiceTypeEnum.MINDFULNESS,
        url: ""
    },
    {
        title: "Warsztaty i treningi uważności",
        serviceType: ServiceTypeEnum.MINDFULNESS,
        url: ""
    },
    {
        title: "Medytacje",
        serviceType: ServiceTypeEnum.MINDFULNESS,
        url: ""
    },

    {
        title: "Metoda Butejki",
        serviceType: ServiceTypeEnum.BREATH,
        url: ""
    },
    {
        title: "Coaching oddechowy",
        serviceType: ServiceTypeEnum.BREATH,
        url: ""
    },
    {
        title: "Warsztaty oddechowe",
        serviceType: ServiceTypeEnum.BREATH,
        url: ""
    },

    {
        title: "Vedic Art",
        serviceType: ServiceTypeEnum.CREATIVITY,
        url: ""
    },
    {
        title: "Medytuję i maluję",
        serviceType: ServiceTypeEnum.CREATIVITY,
        url: ""
    },

    {
        title: "Joga Yin",
        serviceType: ServiceTypeEnum.BODY,
        url: ""
    },
    {
        title: "Spontaniczne po-ruszenie",
        serviceType: ServiceTypeEnum.BODY,
        url: ""
    },

    {
        title: "Spotkania stacjonarne",
        serviceType: ServiceTypeEnum.WOMENS,
        url: ""
    },
    {
        title: "Kobiece wyjazdy",
        serviceType: ServiceTypeEnum.WOMENS,
        url: ""
    },
]